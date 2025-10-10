import { useForm } from "react-hook-form";
import type {SubmitHandler} from "react-hook-form"
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSeparator, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Inputs = {
  identifier: string; // email or username
  password: string;
};

interface LoginFormProps extends React.ComponentProps<"div"> {
  onSubmit: SubmitHandler<Inputs>;
}

export function LoginForm({ className, onSubmit, ...props }: LoginFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card" />

              <Field>
                <FieldLabel htmlFor="identifier">Email or Username</FieldLabel>
                <Input
                  id="identifier"
                  placeholder="m@example.com"
                  {...register("identifier", { required: true })}
                />
                {errors.identifier && <span className="text-red-500">This field is required</span>}
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </Field>

              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}

