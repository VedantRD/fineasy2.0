import React, { Component } from 'react'
// import { useToast } from 'native-base';

// export interface WithThemeProps {
//     calculatorUtilities: any
// }

const withCalculatorFunctions = (OriginalComponent: any) => {
    const NewComponent = (props: any) => {

        // const toast = useToast()

        const calculatorUtilities = {
            roundToTwoDecimalPoint: (num: number) => {
                return +(Math.round(parseFloat(num + "e+2")) + "e-2");
            },

            // accepts comma separated string and returns float number
            removeCommasFromAmount: (amount: string) => {
                if (!amount) return
                return parseFloat(amount.replace(/\D/g, ""))
            },

            // accepts amount as float and returns comma separated string  
            formatAmountWithCommas: (amount: number) => {
                if (!amount) return 0
                var str = amount.toString().split(".");
                str[0] = str[0].toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
                return str[0]
                // return parseFloat(amount).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                // return str;
            },

            // accepts time unit in string and returns ratio in float
            getTimeUnitRatio: (timeUnit: string) => {
                let ratio;
                switch (timeUnit) {
                    case 'month':
                        ratio = 1 / 12
                        break;
                    case 'week':
                        ratio = 1 / 52
                        break;
                    case 'day':
                        ratio = 1 / 365
                        break;
                    default: // for year
                        ratio = 1
                        break;
                }
                return ratio;
            },

            // accepts compound frequency in string and returns ratio in float
            getCompoundFrequencyRatio: (frequency: string) => {
                let fratio
                switch (frequency) {
                    case 'annualy':
                        fratio = 1
                        break;
                    case 'semiannualy':
                        fratio = 2
                        break;
                    case 'quarterly':
                        fratio = 4
                        break;
                    case 'monthly':
                        fratio = 12
                        break;
                    case 'weekly':
                        fratio = 52
                        break;
                    case 'daily':
                        fratio = 365
                        break;
                    default: // for year
                        fratio = 1
                        break;
                }
                return fratio;
            },

            getTimeUnitString: (totalTime: string, timeUnit: string) => {
                if (parseFloat(totalTime) > 1) {
                    return timeUnit.charAt(0).toUpperCase() + timeUnit.slice(1) + 's';
                }
                else {
                    return timeUnit.charAt(0).toUpperCase() + timeUnit.slice(1);
                }
            },

            titalize: (str: string) => {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }

        // const showToast = () => {
        //     toast.show({
        //         description: "Hello world",
        //     })
        // }

        return (
            <OriginalComponent {...props} {...calculatorUtilities} />
        )
    }
    return NewComponent
}

export default withCalculatorFunctions
