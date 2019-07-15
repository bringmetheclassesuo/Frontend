<template>
    <div>
        <a-card
                hoverable
                class="card"
        >
            <h2>Login to your Account</h2>
            <a-form
                    layout="vertical"
                    :form="form"
                    @submit="handleSubmit"
            >
                <a-form-item
                        :validate-status="userNameError() ? 'error' : ''"
                        :help="userNameError() || ''"
                >
                    <span class="txt">Username</span>
                    <a-input
                            v-decorator="['userName',{rules: [{ required: true, message: 'Please input your username!' }]}]"
                            placeholder="Username"
                            v-model="username"
                    >
                        <a-icon
                                slot="prefix"
                                type="user"
                                style="color:rgba(0,0,0,.25)"
                        />
                    </a-input>
                </a-form-item>
                <a-form-item
                        :validate-status="passwordError() ? 'error' : ''"
                        :help="passwordError() || ''"
                >
                    <span class="txt">Password</span>
                    <a-input
                            v-decorator="['password',{rules: [{ required: true, message: 'Please input your Password!' }]}]"
                            type="password"
                            placeholder="Password"
                            v-model="password"
                    >
                        <a-icon
                                slot="prefix"
                                type="lock"
                                style="color:rgba(0,0,0,.25)"
                        />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-button
                            type="primary"
                            html-type="submit"
                            :disabled="hasErrors(form.getFieldsError())"
                            style="width: 100%"
                            @click="change"
                    >
                        Log in
                    </a-button>
                    <div style="padding-top: 2%; padding-bottom: 2%">
                        <span>or</span>
                    </div>
                    <a-button
                            type="secondary"
                            icon="google"
                            :size="large"
                            style="width: 100%"
                    >
                        Sign in with Google
                    </a-button>
                </a-form-item>
            </a-form>
            <a style="bottom: 3%; display: inline-block;" @click="create">Don't have an account? Sign up here</a>
        </a-card>
    </div>
</template>

<script>
    function hasErrors (fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }
    export default {
        name: "LogIn",
        data() {
            return {
                hasErrors,
                form: this.$form.createForm(this),
                username:'',
                password:''
            }
        },
        mounted() {
            this.$nextTick(() => {
                // To disabled submit button at the beginning.
                this.form.validateFields();
            });
        },
        computed:{
            loginStatus(){
                return this.$store.state.loggedIn
            }
        },
        methods: {
            userNameError () {
                const { getFieldError, isFieldTouched } = this.form;
                return isFieldTouched('userName') && getFieldError('userName');
            },
            // Only show error after a field is touched.
            passwordError () {
                const { getFieldError, isFieldTouched } = this.form;
                return isFieldTouched('password') && getFieldError('password');
            },
            handleSubmit  (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.console.log('Received values of form: ', values);
                    }
                });
            },
            create(){
                this.$router.push('create')
            },
            change(){
                if (this.username == "admin" && this.password == "password"){
                    this.$store.dispatch('changeStatus')
                }
                this.$router.push('/myaccount')
            }
        }
    }
</script>

<style scoped>
    .card {
        display: inline-block;
        width: 60%;
        margin-top: 13%;
    }
    .txt{
        float: left;
        padding-bottom: 1%;
    }
</style>