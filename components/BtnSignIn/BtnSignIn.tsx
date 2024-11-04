"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Copy } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import RenderWithCondition from "../RenderWithCondition/renderwithcondition"

const formSchema = z.object({
    username: z.string().min(6, {
        message: "Ten dang nhap it nhat 6 ki tu",
    }),
    password: z.string().min(8, {
        message: "Mat khau it nhat 8 ki tu",
    }),
})

export default function BtnSignIn() {
    const [openLogWithUser, setOpenLogWithUser] = React.useState(false);
    const handleLoginWithUser = () => {
        setOpenLogWithUser(true);
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const handleClickLoginWithUser = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-40 font-bold bg-orange-400 text-base hover:bg-orange-400">Dang nhap</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md flex flex-col justify-center items-center w-full">
                <DialogHeader>
                    <DialogTitle className="flex flex-col justify-center items-center">
                        <Image className="rounded-full" src="/image/pepe.jpg" alt="Logo" width={200} height={100} />
                    </DialogTitle>
                    <DialogDescription className="flex flex-col justify-center items-center gap-2">
                        <p className="text-black text-xl font-bold">Dang nhap PEPE MEME</p>
                        <p className="text-black text-base">Trai nhap de trai nghiem ngay thoi nao...</p>
                    </DialogDescription>
                </DialogHeader>
                <RenderWithCondition condition={!openLogWithUser}>
                    <div className="flex items-center flex-col gap-3 w-full py-3">
                        <Button className="w-3/4" variant="secondary" leftIcon={<Copy />}>Dang nhap voi google</Button>
                        <Button className="w-3/4" variant="secondary" leftIcon={<Copy />}>Dang nhap voi facebook</Button>
                        <Button className="w-3/4" variant="secondary" leftIcon={<Copy />}>Dang nhap voi github</Button>
                        <Button className="w-3/4" onClick={handleLoginWithUser}>Dang nhap voi user</Button>
                    </div>
                </RenderWithCondition>

                <RenderWithCondition condition={openLogWithUser}>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleClickLoginWithUser)} className="space-y-3 w-3/4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Ten dang nhap" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="password" placeholder="Mat khau" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full" type="submit">Dang nhap</Button>
                            <Button className="w-full bg-transparent text-black hover:bg-slate-300" onClick={() => {
                                setOpenLogWithUser(false);
                                form.reset();
                            }}>
                                Lua chon phuong thuc khac
                            </Button>
                        </form>
                    </Form>
                </RenderWithCondition>
                <div>
                    <p>
                        Ban chua co tai khoan?
                        <Link href="#" className="underline text-red-700 font-bold"> Dang ki ngay</Link>
                    </p>
                    <p className="text-center text-red-700 font-bold">
                        <Link href="#" className="underline">Quen mat khau? </Link>
                    </p>
                </div>
                <DialogFooter>
                    <div className="text-sm text-center">
                        <p>
                            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
                            <a className="underline" href="#" target="_blank"> điều khoản sử dụng</a> của chúng tôi.
                        </p>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
