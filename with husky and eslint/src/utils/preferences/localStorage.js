import {PreferencesKeys} from './preferencesKeys';
import {
  storeValue,
  getValue,
  storeObject,
  getObject,
} from './asyncStoragePreferences';

export const saveLoginSessionDetails = async (tokenType, authToken) => {
  await storeValue(PreferencesKeys.authToken, `${tokenType  } ${  authToken}`);
};
export const saveUserDetails = async data => {
  await storeObject(PreferencesKeys.userDetails, data);
};
export const getUserDetails = async () => {
  const details = await getObject(PreferencesKeys.userDetails);
  return details;
};
export const getLogionSessionDetails = async () => {
  const authToken = await getValue(PreferencesKeys.authToken);
  return {
    authToken: authToken.value || '',
  };
};

export const getAuthTokenDetails = async () => {
  const authToken = await getValue(PreferencesKeys.authToken);
  const bearerToken = authToken.value || '';
  return bearerToken;
};

export const getUserId = async () => {
  const userId = await getValue(PreferencesKeys.userId);
  return userId.value || '';
};

export const removeLoginSessionDetails = async () => {
  await storeValue(PreferencesKeys.authToken, '');
};
