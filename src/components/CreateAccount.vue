<template>
    <div style = "padding: 10%">
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
                ]" />
            </a-form-item>
            <a-form-item v-bind="formItemLayout" label="Password">
                <a-input v-decorator="[
                'password',
                {
                    rules: [{
                    required: true, message: 'Please input your password!',
                    }, {
                    validator: validateToNextPassword,
                    }],
                }
                ]" type="password" />
            </a-form-item>
            <a-form-item v-bind="formItemLayout" label="Confirm Password">
                <a-input v-decorator="[
                'confirm',
                {
                    rules: [{
                    required: true, message: 'Please confirm your password!',
                    }, {
                    validator: compareToFirstPassword,
                    }],
                }
                ]" type="password" @blur="handleConfirmBlur" />
            </a-form-item>
            <a-form-item v-bind="tailFormItemLayout">
                <a-checkbox v-decorator="['agreement', {valuePropName: 'checked'}]">
                    I have read the <a href="">
                agreement
                </a>
                </a-checkbox>
            </a-form-item>
            <a-form-item v-bind="tailFormItemLayout">
                <a-button type="primary" html-type="submit">
                    Register
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>


</script>

<script>
    export default {
        name: "CreateAccount",
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
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
                    callback('Two passwords that you enter is inconsistent!');
                } else {
                    callback();
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
            handleWebsiteChange(value) {
                let autoCompleteResult;
                if (!value) {
                    autoCompleteResult = [];
                } else {
                    autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
                }
                this.autoCompleteResult = autoCompleteResult;
            },
        },
    }
</script>

<style scoped>

</style>