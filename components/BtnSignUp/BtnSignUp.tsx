"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import RenderWithCondition from "../RenderWithCondition/renderwithcondition";
import Image from "next/image";
import Link from "next/link";

const formSchema = z.object({
    username: z.string().min(6, {
        message: "Ten dang ki it nhat 6 ki tu",
    }),
    password: z.string().min(8, {
        message: "Mat khau it nhat 8 ki tu",
    }),
    passwordConfirm: z.string().min(8, {
        message: "Mat khau xac nhan it nhat 8 ki tu",
    }),
}).superRefine((values, ctx) => {
    if (values.passwordConfirm !== values.password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["passwordConfirm"],
            message: "Mat khau xac nhan khong khop",
        });
    }
});

export default function BtnSignUp() {
    const [openLogWithUser, setOpenLogWithUser] = React.useState(false);
    const handleLoginWithUser = () => {
        setOpenLogWithUser(true);
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            passwordConfirm: "",
        },
    });

    const handleClickLoginWithUser = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button  className="w-40 bg-transparent text-black hover:bg-transparent shadow-none text-base">Dang ki</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md flex flex-col justify-center items-center w-full">
                <DialogHeader>
                    <DialogTitle className="flex flex-col justify-center items-center">
                        <Image className="rounded-full" src="/image/pepe.jpg" alt="Logo" width={200} height={100} />
                    </DialogTitle>
                    <DialogDescription className="flex flex-col justify-center items-center gap-2">
                        <div className="text-black text-xl font-bold">Dang ki PEPE MEME</div>
                        <div className="text-black text-base">Trai ki de trai nghiem ngay thoi nao...</div>
                    </DialogDescription>
                </DialogHeader>

                <RenderWithCondition condition={!openLogWithUser}>
                    <div className="flex items-center flex-col gap-3 w-full py-3">
                        <Button className="w-3/4" variant="secondary">Dang ki voi google</Button>
                        <Button className="w-3/4" variant="secondary">Dang ki voi facebook</Button>
                        <Button className="w-3/4" variant="secondary">Dang ki voi github</Button>
                        <Button className="w-3/4" onClick={handleLoginWithUser}>Dang ki voi user</Button>
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
                                            <Input placeholder="Ten dang ki" {...field} />
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
                            <FormField
                                control={form.control}
                                name="passwordConfirm"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="password" placeholder="Xac nhan mat khau" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full" type="submit">Dang ki</Button>
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
                    <div>
                        Ban da co tai khoan?
                        <Link href="#" className="underline text-red-700 font-bold"> Dang nhap</Link>
                    </div>
                </div>

                <DialogFooter>
                    <div className="text-sm text-center">
                        <div>
                            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
                            <a className="underline" href="#" target="_blank"> điều khoản sử dụng</a> của chúng tôi.
                        </div>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
