from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from .models import Contact
from .serializers import ContactSerializer


@api_view(['POST'])
def contact_api(request):

    # 🛑 Honeypot spam protection
    if request.data.get('honeypot'):
        return Response({"message": "Spam detected"}, status=400)

    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        data = serializer.validated_data

        try:
            send_mail(
                subject=f"📩 {data.get('subject', 'New Message')} | Portfolio",
                message=f"""
You received a new message from your portfolio:

👤 Name: {data.get('name')}
📧 Email: {data.get('email')}

📝 Message:
{data.get('message')}
""",
                from_email='kanishkjn13@gmail.com',
                recipient_list=['kanishkjn13@gmail.com'],
                fail_silently=False,  # important
            )
        except Exception as e:
            return Response({"message": f"Email error: {str(e)}"}, status=500)

        return Response({
            "message": "Message sent successfully! I will get back to you soon."
        })

    return Response({
        "message": "Failed to send message."
    }, status=400)