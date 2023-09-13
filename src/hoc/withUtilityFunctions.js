import React from 'react'
import { useToast } from 'native-base';

const withUtilityFunctions = (OriginalComponent) => {

    const NewComponent = (props) => {

        const toast = useToast()

        const utilities = {

            // accepts amount as float and returns comma separated string  
            formatAmountWithCommas: (amount) => {
                if (!amount) return 0
                var str = amount.toString().split(".");
                str[0] = str[0].toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                return str[0]
                // return parseFloat(amount).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                // return str;
            },
            showToast: (obj) => {
                let { type, description } = obj
                switch (type) {
                    case 'success':
                        toast.show({
                            description: description,
                            backgroundColor: "emerald.600",
                            color: 'tertiary.400',
                            duration: 2000
                        })
                        break;
                    default:
                        toast.show({
                            description: description
                        })
                }
            },
            titalize: (str) => {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }

        return (
            <OriginalComponent {...props} {...utilities} />
        )
    }
    return NewComponent
};

export default withUtilityFunctions;
