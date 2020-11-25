from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'location', 'phone', 'things_i_love',
                  'description', 'reviews', 'comments', 'image']

        read_only_fields = ['email']

