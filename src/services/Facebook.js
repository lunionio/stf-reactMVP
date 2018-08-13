const API_ID = '532029723898552';

export const login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(API_ID, {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }