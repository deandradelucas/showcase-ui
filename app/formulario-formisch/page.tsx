"use client"

import { Form, Field as FormischField, reset, useForm } from "@formisch/react"
import type { SubmitHandler } from "@formisch/react"
import * as v from "valibot"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const FormSchema = v.object({
  titulo: v.pipe(v.string(), v.minLength(5, "Mínimo 5 caracteres.")),
  descricao: v.pipe(v.string(), v.minLength(20, "Mínimo 20 caracteres.")),
})

export default function FormularioFormisch() {
  const form = useForm({
    schema: FormSchema,
    initialInput: { titulo: "", descricao: "" },
  })

  const handleSubmit: SubmitHandler<typeof FormSchema> = (output) => {
    console.log(output)
  }

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Reportar bug</CardTitle>
          <CardDescription>
            Mesmo padrão Field/FieldGroup, agora com Formisch + Valibot em vez de resolver —
            docs/forms/formisch.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form of={form} onSubmit={handleSubmit}>
            <FieldGroup>
              <FormischField of={form} path={["titulo"]}>
                {(field) => (
                  <Field data-invalid={field.errors !== null}>
                    <FieldLabel htmlFor="titulo">Título</FieldLabel>
                    <Input
                      {...field.props}
                      id="titulo"
                      value={field.input ?? ""}
                      aria-invalid={field.errors !== null}
                      placeholder="Resumo curto do bug"
                    />
                    {field.errors && (
                      <FieldError errors={field.errors.map((msg) => ({ message: msg }))} />
                    )}
                  </Field>
                )}
              </FormischField>

              <FormischField of={form} path={["descricao"]}>
                {(field) => (
                  <Field data-invalid={field.errors !== null}>
                    <FieldLabel htmlFor="descricao">Descrição</FieldLabel>
                    <Textarea
                      {...field.props}
                      id="descricao"
                      value={field.input ?? ""}
                      aria-invalid={field.errors !== null}
                      placeholder="Passos pra reproduzir"
                    />
                    {field.errors && (
                      <FieldError errors={field.errors.map((msg) => ({ message: msg }))} />
                    )}
                  </Field>
                )}
              </FormischField>
            </FieldGroup>

            <CardFooter className="mt-6 px-0">
              <Button type="submit">Enviar</Button>
              <Button type="button" variant="outline" onClick={() => reset(form)}>
                Limpar
              </Button>
            </CardFooter>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
