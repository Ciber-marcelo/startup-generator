'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Chat() {
   const { messages, input, handleInputChange, handleSubmit } = useChat();

   return (
      <Card className="w-[500px] bg-white mx-2">
         <CardHeader className="items-center">
            <CardTitle>Startup Generator</CardTitle>
            <CardDescription>Generate innovative startup concepts</CardDescription>
         </CardHeader>

         <CardContent>
            <ScrollArea className="h-[400px] w-full">
               {messages.map((item) => (
                  <div key={item.id} className="flex gap-3 mb-3 text-slate-600 text-sm">
                     {item.role === 'user' && (
                        <Avatar>
                           <AvatarFallback>MM</AvatarFallback>
                           <AvatarImage src="https://github.com/ciber-marcelo.png" />
                        </Avatar>
                     )}

                     {item.role === 'assistant' && (
                        <Avatar className="bg-primary text-white">
                           <AvatarFallback>AI</AvatarFallback>
                           <AvatarImage />
                        </Avatar>
                     )}

                     <p className="bg-slate-200 rounded-md p-2">
                        <span className="block font-bold text-slate-700">
                           {item.role === 'user' ? 'User:' : 'AI:'}
                        </span>
                        {item.content}
                     </p>
                  </div>
               ))}
            </ScrollArea>
         </CardContent>

         <CardFooter>
            <form className="w-full flex gap-x-2" onSubmit={handleSubmit}>
               <Input placeholder="What is your idea for a startup ?" value={input} onChange={handleInputChange} />
               <Button type="submit" className="text-white">Send</Button>
            </form>
         </CardFooter>
      </Card>
   )
}