from rest_framework import viewsets
from .serializer import PersonaSerializer
from .models import Persona

# Create your views here.

class PersonaView(viewsets.ModelViewSet):

    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()

    
