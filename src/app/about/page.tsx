'use client'
import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Spacer} from "@nextui-org/react";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar className="navbar">
      <NavbarContent justify="start">
      <div>
  <NavbarBrand>
    <img src="https://svgshare.com/i/w_K.svg" width="150px"/>
  </NavbarBrand>
</div>
      <p className="text-inherit hidden sm:flex navbar-content">Virgin Islands International Islamic Society</p>
      </NavbarContent>
      
      <NavbarContent className="sm:flex gap-4 ml-auto" justify="end">
        <NavbarItem>
          <Link href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link underline="always" href="/about">
            About
          </Link>
        </NavbarItem>
        
      </NavbarContent>
    
    </Navbar>
    </main>
  )
}