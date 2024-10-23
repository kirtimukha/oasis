import React from 'react';
import Link from "next/link";
import {Logo} from "@/app/components/Logo";

function Navigation () {
 return (
    <ul>
      <li><Link href={`/`}>home</Link></li>
      <li><Link href={`cabins`}>cabins</Link></li>
      <li><Link href={`about`}>about</Link></li>
      <li><Link href={`account`}>account</Link></li>
    </ul>
  
 );}

export default Navigation;