# EncodedMessage
This project encodes message entered from user and shares the detail to another person using the encoded URL link.
The url uses base64 encoding to convert all ASCII codes and later added to a URL.

This project utilises materialized.css developed by Google. It's a modern responsive CSS design framework.

The underlaying principle of base64 conversion from ASCII can be described as shown below:

            [google.com][/search][?q=xyz][#adkjhoiewa]
                 |          |        |         |
                 |          |        |         |
                 |          |        |         |
                 |          |        |         |
                 |          |        |         |
                 |          |        |      hash(can be accessed using window.location)
                 |          |        |      processed by browser
        domain name         |        |        
                      file location  |          
                                different modes
                       (usually used for the server side)

---

Project initiation

     setting up files
---

V 0.11

    setting up card display and interal css
---

V 0.12

    add sharing with a friend block as hidden
---

V 0.13

    corrected html tags and subit button added