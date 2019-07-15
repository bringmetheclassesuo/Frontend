<template>
    <div style="padding: 11%">
        <a-card hoverable style="width: 90%; display: inline-block">
            <h2>Create an account</h2>
            <a-form :form="form" @submit="handleSubmit">
                <a-form-item v-bind="formItemLayout" label="E-mail">
                    <a-input v-decorator="[
                                    'email',
                                    {
                                        rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                        }, {
                                        required: true, message: 'Please input your E-mail!',
                                        }]
                                    }
                                    ]"/>
                </a-form-item>
                <a-form-item v-bind="formItemLayout" label="Username">
                    <a-input v-decorator="[
                                    'username',
                                    {
                                        rules: [{
                                        required: true, message: 'Please input your username!',
                                        }]
                                    }
                                    ]"/>
                </a-form-item>
                <a-form-item v-bind="passItemLayout" label="Password">
                    <a-form-item class="ant-col-xs-24 ant-col-sm-12" :style="{ display: 'inline-block', margin:0}">
                        <a-input v-decorator="[
                                    'password',
                                    {
                                        rules: [{
                                        required: true, message: 'Please input your password!',
                                        }, 
                                        {
                                        min: 6, message: 'Minimum length is 6 characters.',
                                        },
                                        {
                                        pattern: '[a-z]', message: 'Must include lowercase letter.',
                                        },
                                        {
                                        pattern: '[A-Z]', message: 'Must include uppercase letter.',
                                        },
                                        {
                                        pattern: '[0-9]', message: 'Must include number.',
                                        },
                                        {
                                        pattern: '[^0-9A-z]', message: 'Must include special character.',
                                        },
                                        {
                                        validator: validateToNextPassword,
                                        }],
                                    }
                                    ]" :type="pass1Visible"/>
                    </a-form-item>
                    <a-form-item class="ant-col-xs-24 ant-col-sm-1" :style="{ display: 'inline-block', margin:0}">
                        <a-button class="seePassword" type="primary" :icon="icon1" @click="viewPass(0)"/>
                    </a-form-item>
                </a-form-item>
                <a-form-item v-bind="passItemLayout" label="Confirm Password">
                    <a-form-item class="ant-col-xs-24 ant-col-sm-12" :style="{ display: 'inline-block', margin:0}">
                        <a-input v-decorator="[
                                        'confirm',
                                        {
                                            rules: [{
                                            required: true, message: 'Please confirm your password!',
                                            }, {
                                            validator: compareToFirstPassword,
                                            }],
                                        }
                                        ]" :type="pass2Visible" @blur="handleConfirmBlur"/>
                    </a-form-item>
                    <a-form-item class="ant-col-xs-24 ant-col-sm-1" :style="{ display: 'inline-block', margin:0}">
                        <a-button class="seePassword" type="primary" :icon="icon2" @click="viewPass(1)"/>
                    </a-form-item>
                </a-form-item>
                <a-form-item v-bind="tailFormItemLayout">
                    <a-checkbox
                            v-decorator="['agreement', {valuePropName: 'checked', rules:[{validator: isChecked, message: 'Please read and accept the agreement'}]}]">
                        I have read and accept the
                        <a-button type="dashed" @click="warning"> agreement</a-button>
                    </a-checkbox>
                </a-form-item>
                <a-form-item v-bind="registerItemLayout">
                    <a-button type="primary" html-type="submit" :disabled="btnDisabled">
                        Register
                    </a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>


<script>
    export default {
        name: "CreateAccount",
        data() {
            return {
                icon1: "eye-invisible",
                icon2: "eye-invisible",
                pass1Visible: "password",
                pass2Visible: "password",
                confirmDirty: false,
                btnDisabled: true,
                formItemLayout: {
                    labelCol: {
                        xs: {
                            span: 24
                        },
                        sm: {
                            span: 6
                        },
                    },
                    wrapperCol: {
                        xs: {
                            span: 24
                        },
                        sm: {
                            span: 12
                        },
                    },
                },
                passItemLayout: {
                    labelCol: {
                        xs: {
                            span: 24
                        },
                        sm: {
                            span: 6
                        },
                    },
                },
                tailFormItemLayout: {
                    wrapperCol: {
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 10,
                            offset: 7,
                        },
                    },
                },
                registerItemLayout: {
                    wrapperCol: {
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 7,
                            offset: 8,
                        },
                    },
                },
            };
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                // eslint-disable-next-line no-unused-vars
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        this.$router.push({
                            path: '/'
                        })
                        //this.console.log('Received values of form: ', values);
                    }
                });
            },
            handleConfirmBlur(e) {
                const value = e.target.value;
                this.confirmDirty = this.confirmDirty || !!value;
            },
            compareToFirstPassword(rule, value, callback) {
                const form = this.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('The passwords do not match!');
                } else {
                    callback();
                }
            },
            isChecked(rule, value, callback) {
                const form = this.form;
                if (form.getFieldValue('agreement')) {
                    callback();
                    this.btnDisabled = false;
                } else {
                    callback('Please read and accept the agreement');
                    this.btnDisabled = true;
                }
            },
            validateToNextPassword(rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['confirm'], {
                        force: true
                    });
                }
                callback();
            },
            warning() {
                this.$warning({
                    title: 'Terms of Use',
                    content: ( <div>
                        <p> Please agree </p>
                        <p> Not actually agreeing to anything </p>
                        <p> No one reads these anyway </p>
                        </div>
                    )
                });
            },
            viewPass(passId) {
                switch (passId) {
                    case 0:
                        if (this.icon1 == "eye") {
                            this.icon1 = "eye-invisible";
                            this.pass1Visible = "password";
                        } else {
                            this.icon1 = "eye";
                            this.pass1Visible = "";
                        }
                        break;
                    case 1:
                        if (this.icon2 == "eye") {
                            this.icon2 = "eye-invisible";
                            this.pass2Visible = "password";
                        } else {
                            this.icon2 = "eye";
                            this.pass2Visible = "";
                        }
                        break;
                }
            }
        },
    }
</script>

<style scoped>
    .seePassword {
        margin-left: 7px;
    }
</style>