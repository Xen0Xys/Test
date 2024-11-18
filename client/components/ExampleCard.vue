<script setup lang="ts">
import {Button} from "~/components/ui/button";
import {Input} from "~/components/ui/input";
import {Label} from "~/components/ui/label";
</script>

<template>
    <Card class="w-[350px]">
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>This is the card description 3</CardDescription>
        </CardHeader>
        <CardContent>
            <Label for="name">Name</Label>
            <div class="relative w-full max-w-sm items-center">
                <Input id="name" placeholder="Enter your name" label="Name" class="pl-10" autocomplete="off"/>
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <Icon name="iconoir:user" class="size-6 text-muted-foreground"/>
                </span>
            </div>
        </CardContent>
        <CardFooter class="flex justify-between gap-3">
            <Button variant="destructive" class="w-full">
                Quit
            </Button>
            <Button class="w-full">
                Validate
            </Button>
        </CardFooter>
    </Card>
</template>

<style scoped>

</style>
