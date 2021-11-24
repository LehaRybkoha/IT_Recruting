<template>
    <label class="checkbox">
        <div class="checkbox__wrapper">
            <input
                    class="checkbox__input"
                    type="checkbox"
                    :checked="modelValue"
                    :value="value"
                    @change="updateInput"
            />
            <div class="checkbox__icon">
                <IconWrapper class="checkbox__approve" width="16" height="16">
                    <IconApprove />
                </IconWrapper>
            </div>
        </div>

        <slot />
    </label>
</template>

<script>
    import IconWrapper from "../IconWrapper";
    import IconApprove from '../Icon/Approve'

    export default {
        name: 'DesktopCommonCheckbox',
        model: {
            prop: 'modelValue',
            event: 'change',
        },
        props: {
            value: {
                type: String,
            },
            modelValue: {
                default: false,
            },
        },
        components: {
            IconWrapper,
            IconApprove
        },
        methods: {
            updateInput(event) {
                this.$emit('change', event.target.checked)
            },
        },
    }
</script>

<style scoped lang="scss">
    .checkbox {
        display: flex;
        align-items: center;
        cursor: pointer;
        &__input {
            display: none;
            position: absolute;
            z-index: -1;
            opacity: 0;
            &:checked ~ .checkbox__icon {
                background-color: #00E0FF;
                .checkbox__approve {
                    opacity: 1;
                }
            }
        }
        &__icon {
            margin-top: 2px;
            border-radius: 5px;
            margin-right: 8px;
            width: 16px;
            height: 16px;
            border: 1px solid #00E0FF;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: border 0.2s ease, background-color 0.2s ease;
            @media screen and (min-width: 400px) {
                width: 20px;
                height: 20px;
            }
        }
        &__approve {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    }
</style>
