<template>
    <div class="login">
        <v-toolbar tabs>
            <v-tabs
                    slot="extension"
                    v-model="tabs"
                    fixed-tabs
                    color="transparent"
            >
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#mobile-tabs-5-1" class="primary--text">
                    <v-icon>phone</v-icon>
                    <span>登录</span>
                </v-tab>

                <v-tab href="#mobile-tabs-5-2" class="primary--text">
                    <v-icon>favorite</v-icon>
                    <span>注册</span>
                </v-tab>
            </v-tabs>
        </v-toolbar>

        <v-tabs-items v-model="tabs" class="white elevation-1">
            <v-tab-item :id="'mobile-tabs-5-' + 1">
                <form>
                    <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :counter="10"
                            label="Name"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-text-field
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                    ></v-text-field>

                    <v-btn @click="submit">submit</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </form>
            </v-tab-item>
            <v-tab-item :id="'mobile-tabs-5-' + 2">
                <form>
                    <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :counter="10"
                            label="Name"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                    ></v-text-field>
                    <v-text-field
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                    ></v-text-field>

                    <v-btn @click="submit">submit2</v-btn>
                    <v-btn @click="clear">clear2</v-btn>
                </form>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data:()=>({
                tabs: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        })
    }
</script>

<style lang="scss">

    .v-toolbar__content {
        height: 0!important;
    }

    .v-tabs__item--active {
        border-bottom: 3px solid teal;
    }
    .v-window {
        width: 80%!important;
        height: 300px!important;
        margin: 3rem auto;
        padding: 0.1rem 0 .1rem;
    }
    .v-window__container {
        height: 300px!important;
    }


    form {
        width: 60%!important;
        margin: 4rem auto!important;
        button {
            margin-top: 2rem!important;
        }
    }

</style>