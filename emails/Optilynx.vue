<template>
  <e-html>
    <e-head />
    <e-preview>Nový zájemce o OptiLynx</e-preview>
    <e-tailwind>
      <e-body class="mx-auto my-auto bg-white font-sans">
        <e-container
          class="mx-auto my-[40px] w-full max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]"
        >
          <e-section class="px-10 pt-5">
            <e-img src="/img/png/optilynx.png" class="w-full" />
          </e-section>
          <e-heading
            class="mx-0 my-[30px] p-0 text-center text-[24px] font-bold text-black"
          >
            Nový zájemce o OptiLynx
          </e-heading>
          <ESection class="text-center">
            <ERow
              class="mb-2 rounded-lg bg-neutral-50"
              style="border: 1px #eee solid"
            >
              <EColumn class="w-[200px] max-w-full">
                <EText class="my-2">Jméno a příjmení</EText>
              </EColumn>
              <EColumn>
                <EText class="my-2 font-semibold"
                  >{{ props.firstName }} {{ props.lastName }}</EText
                >
              </EColumn>
            </ERow>
            <ERow
              class="mb-2 rounded-lg bg-neutral-50"
              style="border: 1px #eee solid"
            >
              <EColumn class="w-[200px] max-w-full">
                <EText class="my-2">Název firmy</EText>
              </EColumn>
              <EColumn>
                <EText class="my-2 font-semibold">{{
                  props.firmName || "Nevyplněno"
                }}</EText>
              </EColumn>
            </ERow>
            <ERow
              class="mb-2 rounded-lg bg-neutral-50"
              style="border: 1px #eee solid"
            >
              <EColumn class="w-[200px] max-w-full">
                <EText class="my-2">Email</EText>
              </EColumn>
              <EColumn>
                <EText class="my-2 font-semibold">{{
                  props.email || "Nevyplněno"
                }}</EText>
              </EColumn>
            </ERow>
            <ERow
              class="mb-2 rounded-lg bg-neutral-50"
              style="border: 1px #eee solid"
            >
              <EColumn class="w-[200px] max-w-full">
                <EText class="my-2">Telefonní číslo</EText>
              </EColumn>
              <EColumn>
                <EText class="my-2 font-semibold">{{
                  props.phone || "Nevyplněno"
                }}</EText>
              </EColumn>
            </ERow>
          </ESection>
          <EText class="my-2">Přiložená zpráva</EText>
          <EText
            class="my-2 rounded-lg bg-neutral-50 p-5"
            style="border: 1px #eee solid"
          >
            {{ props.message }}
          </EText>
          <e-hr
            class="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]"
          />
          <e-section>
            <e-text class="text-[12px] leading-[24px] text-[#666666]">
              ©2023 Jagu s.r.o.<br />
            </e-text>
          </e-section>
        </e-container>
      </e-body>
    </e-tailwind>
  </e-html>
</template>

<script lang="ts" setup>
import {
  EHead,
  EHtml,
  EText,
  EButton,
  EContainer,
  EPreview,
  EBody,
  ESection,
  EImg,
  EHeading,
  ELink,
  EColumn,
  ERow,
  EHr,
  ETailwind,
} from "vue-email"

const props = withDefaults(
  defineProps<{
    firstName: string
    lastName: string
    firmName?: string
    message: string
    email?: string
    phone?: string
  }>(),
  {
    firstName: "Jan",
    lastName: "Novák",
    message:
      "Dobrý den,\n toto je testovací zpráva.\n" + "S pozdravem\n Jan Novák",
  }
)
</script>
