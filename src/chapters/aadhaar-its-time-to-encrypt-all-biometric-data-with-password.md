---
title: "Aadhaar: It's time to encrypt all biometric data with password"
date: "2018-05-02"
---

All biometric data should be encrypted. During authentication, the user needs to provide both aadhar number and password.  
  
So only the user can decrypt and access the biometric data. Biometrics of the little finger can be kept in the unencrypted form, to remove duplicates.  
  
In case you forget the password:  
One has to submit the aadhaar number and little finger biometrics to obtain another.  
The ciphertext of aadhaar number should be replaced with new ciphertext (obtained from new password)  
  
In case you lost both (Password and Aadhaar Number):  
The person must come under scrutiny and old aadhaar number should be removed by using his/her little finger, and new aadhaar number can be given.  
  
To change the password:  
Enter the old password and aadhaar number, match the ciphertext with your fingerprint and then replace the ciphertext with new password.  
  
All the steps should be done in aadhaar center.  
  
The python code:  

  

from Crypto.Cipher import AES  
  
obj = AES.new('Aadhaar No:1234567891012', AES.MODE\_CBC, 'MyPassword:58023')  
message = "Aadhaar Biometric data data data"  
  
ciphertext = obj.encrypt(message)  
  
print(ciphertext)  
  
obj2 = AES.new('Aadhaar No:1234567891012', AES.MODE\_CBC, 'MyPassword:58023')  
  
print(obj2.decrypt(ciphertext))  
  
\# Code for authentication  
\# Enter your finger print  
\# Match the finger print with obj2.decrypt(ciphertext)  
\# Authentication success
