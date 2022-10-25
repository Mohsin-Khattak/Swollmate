import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export const IMAGE_SERVICE = {
  _returnImageCamera: async () => {
    try {
      const res = await launchCamera({
        mediaType: 'photo',
        includeBase64: false,
      });
      if (res?.didCancel) {
        throw 'user canceled the action';
      } else if (res?.assets) {
        return {
          uri:
            Platform.OS === 'android'
              ? res.assets[0].uri
              : res.assets[0].uri.replace('file://', ''),
          name: res.assets[0].fileName,
          type: res.assets[0].type,
        };
      } else {
        throw 'unknown error';
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  _returnImageGallery: async () => {
    try {
      const res = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: false,
      });
      if (res?.didCancel) {
        // throw 'user canceled the action';
        console.log('user canceled the action');
      } else if (res?.assets) {
        return {
          uri:
            Platform.OS === 'android'
              ? res?.assets[0].uri
              : res?.assets[0].uri.replace('file://', ''),
          name: res?.assets[0].fileName,
          type: res?.assets[0].type,
        };
      } else {
        throw 'unknown error';
      }
    } catch (error) {
      throw new Error(error);
    }
  },
};
