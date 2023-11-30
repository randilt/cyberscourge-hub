+++
title = 'How to Divide a Network Into Subnets With an Example (Networking Concepts - 2)'
date = 2023-11-27T16:26:44+05:30
draft = false
description = "Unlock the steps to subnetting mastery in our comprehensive guide. Explore the art of dividing IP space for departments like Development, Security, Finance, and Operations. From subnet masks to binary conversion, dive deep into creating distinct subnets with CyberScourge Hub's Networking Concepts series."
image = "/images/ipv4-subnetting-example.svg"
imageBig = "/images/ipv4-subnetting-example.svg"
categories = ["Networking and Cybersecurity Concepts"]
authors = ["RandilT"]
avatar = "/images/avatar.webp"
featured = true
+++

# How to Divide a Network into Subnets - With an Example (Networking Concepts - 2)

Greetings, network enthusiasts, and welcome back to the CyberScourge Hub! Today, we take you on a journey deep into the art of subnetting. Join us as we discuss the methods of dividing the IP space for our example company ByteCo's departments which are the Development, Security, Finance and Operations departments. Let the subnetting adventure begin! First of all check out our first article in Networking concepts and Cyber Security Concepts to get a basic understanding on what IP is and what a subnet is.

## Step 1: The Canvas - IP Address 192.168.100.1/24

Our canvas is set – the IP address 192.168.100.1/24. Now, let's transform this canvas into distinct subnets for each department.

### A bit about the subnet mask.

In simple terms subnet mask is the number of bits that will not change during the subnetting process. The subnet mask is given at the end of the ip address after the forward slash. or they might give you the subnet mask in a simillar format to IP or in binary.

Our subnet mask in this example is 24. which is equal to 255.255.255.0 or 11111111.11111111.11111111.00000000.

This tells us that, whatever happens the first 24 bits of the IP address 192.168.100.1 will not change. You could also say the first 3 octets won't change so the subnetting changes will only happen to the last octet.

As we need to divide our network into 4 subnets, first of all we will have to borrow the first 2 bits from the final 8 bits which holds the values 128 and 64 respectively.

**_Why did we take only the first 2 bits from the final 8 bits?_**

We know that 2^2 equals to 4 right? Then that's enough to understand the reason. As only 4 subnets are needed we will check which power of two will give the number of subnets needed. In this case we only need 2 so we borrow the first 2 bits from final 8 bits.

_Imagine we need 8 subnets. Then how many bits do we have to borrow from the final bits? You guessed it right its 3 bits. Because 2^3 = 8._

## Step 2: Convert to Binary

Let's start by converting our IP address to binary. Each octet is a canvas of 8 bits, and here's the breakdown:

- 192 in binary: 11000000
- 168 in binary: 10101000
- 100 in binary: 0110100
- 1 in binary: 00000001

So, our IP 192.168.100.1 in binary is 11000000.10101000.0110100.00000001.

## Step 3: Subnetting Magic

### Lets divide the network into 4 subnets

For our innovative Development team, we allocate the first subnet. The binary magic happens by borrowing 2 bits for subnetting.

- Subnet 1: 00 (decimal 0) this subnet in binary is 11000000.10101000.0110100.(00)000001 and in decimal it is 192.168.100.1
- Subnet 2: 01 (decimal 64) this subnet in binary is 11000000.10101000.0110100.(01)000001 and in decimal it is 192.168.100.65
- Subnet 3: 10 (decimal 128) this subnet in binary is 11000000.10101000.0110100.(10)000001 and in decimal it is 192.168.100.129
- Subnet 4: 11 (decimal 192) this subnet in binary is 11000000.10101000.0110100.(11)000001 and in decimal it is 192.168.100.193

_In the above conversion I put parantheses around the bits that get changed during the subnetting process_

So, our subnets for the network are **192.168.100.1 (Subnet 1 Development department)**, **192.168.100.65 (Subnet 2 Seccurity department)**, **192.168.100.129 (Subnet 3 Finance department)**, and **192.168.100.193 (Subnet 4 Opertions Department)**. Now each of them act as seperate networks even if they are connected to the same devices (routers, switches and etc. might be same for multiple subnets.)

![Before and After Subnetting](/images/subnetting.svg "a title")

Keep in note that after subnetting our subnet mask for each subnet will also change. Why?,
We borrow two bits from the final 8 bits to the first 24 bits right? So this means that those two bits will also get added to the unchangable bits. Now what is the subnet mask? It is 26 because 24 + 2 is 26 🙂.

Finally the divided subnets are,

- 192.168.100.1/26 (Development)
- 192.168.100.65/26 (Security)
- 192.168.100.129/26 (Finance)
- 192.168.100.193/26 (Operations)

## Conclusion: Subnetting Mastery Achieved!

With a touch of binary magic, we've carved distinct subnets for ByteCo's departments. Stay tuned for more networking adventures as we unravel the intricacies of routers and access points in our next post.
