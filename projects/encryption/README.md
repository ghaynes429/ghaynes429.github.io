
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:6
My Partner's Key:7

Our initial shared key:13

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| yhzoreybba      | lumberloon      | 13  |
| mhyues aifyg    | sneaky golem    | 20  |
| tkd spgi vdvvxc | evo dart goggins| 15  |
| evo royal giant | evo royal giant | 0   |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here: yhzore

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:yhzore

    Source: [Gabe]
    Destination: [JJ]  
    Sequence: 1/3
    Data: [01011001] [01101000]
    =========
    Packet 2:yhzore

    Source: [Gabe]
    Destination: [JJ]
    Sequence: 2/3 
    Data: [01111010] [01101111]
    =========
    Packet 3:yhzore

    Source: [Gabe]
    Destination: [JJ]
    Sequence: 3/3
    Data: [01110010] [01100101]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
Symmetric encryption uses one shared key for both encryption and decryption, while asymmetric encryption uses a public key and a private key. In the simulation, asymmetric encryption was used to safely exchange the secret key, and symmetric encryption was used to encrypt the actual message because it’s faster.
- Why is it important that this protocol uses a new key for each message?
Using a new key each time limits the damage if a key is ever exposed. It also prevents attackers from collecting many messages encrypted with the same key and using patterns to break the encryption.
- Why is it important that you never share your secret key?
Your secret key allows someone to decrypt your messages or impersonate you, so sharing it destroys your security. Keeping it private ensures only you can read the encrypted content.
- In the transport layer, do these messages use TCP or UDP? Why?
These packets act like TCP because they include sequence numbers and ordered delivery. TCP is used when reliability is required, which these packets clearly depend on.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
In the internet layer, each packet is wrapped in an IP header and routed across different networks toward the destination. At the link layer, the packet is turned into a frame with MAC addresses and sent across the physical network hardware.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?
They can still see metadata such as IP addresses, packet sizes, and timing. Even though they can’t read the encrypted content, this information can reveal who is communicating and how often.
