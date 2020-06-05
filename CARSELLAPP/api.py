from .models import Car
from rest_framework import viewsets, permissions
from .serializers import CarSerializer


# Car Viewset
class CarViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = CarSerializer

    def get_queryset(self):
        return self.request.user.cars.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
