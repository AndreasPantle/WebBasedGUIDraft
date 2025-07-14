/*
The message for sending to the communication partner.
Status will be True / False.
Message depends on status.
  * If status is false, message contains the error.
  * If status is true, message contains the data from the backend.
    * If status is true and the operation succeed it can be ACK only.
*/
export const API_STATUS = 'STATUS';
export const API_MESSAGE = 'MESSAGE';
