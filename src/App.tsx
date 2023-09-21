import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./App.css";
import { Button, Input } from "./components/Input";
import { Form } from "./components/Form";

const FormSchema = z.object({
    name: z.string().min(4).max(20),
    email: z.string().email(),
    count: z.coerce.number().min(10).max(20),
});

type FormTypes = z.infer<typeof FormSchema>;

const App = () => {
    const form = useForm<FormTypes>({ resolver: zodResolver(FormSchema) });

    const handleSubmit = (value: FormTypes) => {
        console.log(value);
    };

    return (
        <Form form={form} onSubmit={handleSubmit} className="p-4">
            <Input
                label="Firstname"
                required
                id="name"
                type="text"
                placeholder="Name"
                defaultValue="Test"
                {...form.register("name")}
            />

            <Input
                label="Email"
                required
                id="email"
                type="email"
                placeholder="Email"
                defaultValue="test@gmail.com"
                {...form.register("email")}
            />

            <Input
                required
                label="Count"
                type="number"
                id="count"
                placeholder="Count"
                defaultValue="1"
                {...form.register("count")}
            />

            <div>
                <Button type="submit">Submit</Button>
            </div>
        </Form>
    );
};

export default App;
