const calculatorInfo = {
    "SIP": {
        name: 'SIP',
        subName: 'Systematic Investment Plan',
        icon: require('../images/sip.png'),
        what: {
            title: 'What is SIP ?',
            desc: [
                'A Systematic Investment Plan (SIP), more popularly known as SIP, is a facility offered by mutual funds to the investors to invest in a disciplined manner.',
                'SIP facility allows an investor to invest a fixed amount of money at pre-defined intervals in the selected mutual fund scheme.',
                'The fixed amount of money can be as low as Rs. 500, while the pre-defined SIP intervals can be on a weekly/monthly/quarterly/semi-annually or annual basis.',
                'By taking the SIP route to investments, the investor invests in a time-bound manner without worrying about the market dynamics and stands to benefit in the long-term due to average costing and power of compounding.'
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                'When you invest regularly through SIP and invest for the long term, the benefits are magnified by the compounding effect. Compounding effect ensures that you earn returns not only on your principal amount (actual investment) but also on the gains on the principal amount i.e. your money grows over time as the money you invest earns returns. And the returns also earn returns.',
                'The earlier one starts saving and investing regularly, the easier it is to achieve your goals. The graph below shows the impact of beginning to invest Rs.5,000 monthly at various stages of life till the age of 60 years (assuming a return of 12% p.a.).If you start SIP at age 25, as per the illustration shown a corpus of approximately Rs. 2.76 crores can be generated at retirement. If you would have waited 5 years and started SIP at age 30, a corpus of approximately Rs. 1.54 crore would have been available to you at retirement i.e. a difference of Rs. 1.21 crore - which is the "cost of delaying starting SI".'
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                'SIP returns are lower in consistently rising markets',
                'Limited options of SIP dates',
                'Only Pre-defined Fixed Amount can be Invested by SIP',
                'Stopping intermediate payment in SIP',
                'Delay between actual application & start/stop of SIP',
                'SIP does not suit people with unpredictable cash flows'
            ]
        },
    },
    "Lumpsum": {
        name: 'Lump Sum',
        subName: 'One Time Investment',
        icon: require('../images/lump_sum.png'),
        what: {
            title: 'What is Lumpsum investment ?',
            desc: [
                'A lump sum investment is depositing the entire amount at one go. Lump-sum investment is a popular way of investing in mutual funds.',
                'If you invest the entire amount available with you in a mutual fund scheme, it is called the lump-sum mutual fund investment. Lump-sum investing is a common mode of investment for HNIs and big-ticket investors.',
                'It is an excellent way of investing in the long-term. An investor who has a high-risk tolerance may consider investing a lump sum amount in a mutual fund scheme.'
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                'By option for lump sum mode, individuals can invest a considerable amount in Mutual Funds. As a consequence, when the Market shows a growth period, then the investment value also increases to a large extent as compared to the value of SIP investment.',
                'Lump sum investment is suitable for individuals who prefer to invest through long-term. Long-term investment in case of lump sum investment can be considered for an approximate investment tenure of 10 years or more. However, for lump sum investment in Debt fund, individuals can also choose to invest for a medium-term tenure.',
                'Lump sum mode is generally convenient for individuals as people who are having a large amount can spread their investments. However, if the investment is done through SIP mode then they have to be careful that the amount is invested at regular intervals.',
                'Whenever investors choose for a long-term investment, they should always look for the market timing. Individuals generally should choose to invest when the markets are already in a slump and is showing growth potentials. In this situation, individuals can earn higher returns through lump sum mode than in comparison to SIP mode. However, if the lump sum investment is done when the markets have already reached a peak, in that case, individuals might end up with a loss.'
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                'Lump sum plan does not instill investment discipline. It also does not take care of regular savings that an investor might have. ',
                'If the requirement of funds is in the near future, then a lump sum investment may not be the best option as the real returns are derived only over the longer term.',
                'As the sum is invested at one go, the investor may end up buying lesser units if the market is on a decline. There is no option of buying units in between or regularly. The only option is to invest in a new fund for which an investor may not even have funds due to single cash outflow owing to lump sum payment. So, the market timing is quite crucial while investing through lumpsum method.'
            ]
        },
    },
    "ELSS": {
        name: 'ELSS',
        subName: 'Equity-linked savings scheme',
        icon: require('../images/lump_sum.png'),
        what: {
            title: 'What is an ELSS fund ?',
            desc: [
                'An ELSS fund or an equity-linked savings scheme is the only kind of mutual funds eligible for tax deductions under the provisions of Section 80C of the Income Tax Act, 1961. You can claim a tax rebate of up to Rs 1,50,000 and save up to Rs 46,800 a year in taxes by investing in ELSS mutual funds.',
                'ELSS mutual funds’ asset allocation is mostly (65% of the portfolio) made towards equity and equity-linked securities such as listed shares. They may have some exposure to fixed-income securities as well. These funds come with a lock-in period of just three years, the shortest among all Section 80C investments.'
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                'Shortest lock-in - ELSS has the shortest lock-in period of three years. Tax-saving fixed deposits have a five-year lock-in, while PPF has a 15-year maturity. All in all, ELSS offers more liquidity in the medium term.',
                'Potentially higher returns - Unlike ELSS where return is market linked, other 80C investments like PPF or FDs are fixed income products. ELSS has the potential to generate significantly higher wealth in a medium to long-term investment horizon.',
                'Better post-tax returns - Long Term Capital Gains from ELSS are tax free up to limit of ₹1 lac. Gains over 1 lac attracts a tax rate of just 10%. Lower tax rates, coupled with higher returns ensure the best post tax returns.',
                'Regular investing is hassle-free and convenient - It is easy to invest in ELSS funds through a monthly SIP.'
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                'ELSS is not for risk averse investors. As ELSS investments are per stock market investments, all risks associated with equity investments pertain to ELSS.',
                'Another disadvantage of ELSS is that you cannot withdraw your funds before the maturity date.',
            ]
        },
    },
    "FD": {
        name: 'FD',
        subName: 'Fixed Deposit',
        icon: require('../images/fd.png'),
        what: {
            title: 'What is Fixed Deposit ?',
            desc: [
                'In India, Fixed Deposits are one of the most popular ways to save money. They are a safe investment, offer good returns, and are easy to open.',
                'So, what exactly is a Fixed Deposit?',
                'In a Fixed Deposit, you put a lump sum in your bank for a fixed tenure at an agreed rate of interest. At the end of the tenure, you receive the amount you have invested plus compound interest.\n FDs are also called term deposits.'
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                'Assured Return ,Unlike market-linked securities that may result in losses due to market volatility, fixed deposits provide an assured rate of return on investments. Your capital remains safe in FDs, and returns are higher than savings accounts.',
                'Benefits of Compounding, With FD investments, you can earn interest on interest, thereby enjoying higher returns and faster multiplication of money',
                'Low Minimum Investment, If you want to inculcate an investment habit but do not have a large sum to do so, FDs are a good option because investment amounts can start as low as Rs. 500.',
                'Liquidity, Premature withdrawal of FDs is permitted, although you will lose some interest in the missed duration. However, this gives you the benefit of liquidity since you can liquidate the FD in times of emergencies.',
                "Higher Rates for Senior Citizens, Senior citizens can earn more from their life's savings and move one step closer to no-compromise retired life."
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                'Interest are Taxed Upon, All interest gained on the fixed deposits are fully taxed upon. The income is denoted under the head “Income From The Other Sources" when you file your ITR to Income Tax Returns.There are other financial instruments available, which provide you the benefit of tax-free savings. The PPF and the government bonds, are a few of them.',
                'TDS Taxation, Interests gained from a FD are also charged with TDS. Banks reduce it from the interest accrued at the end of each year. However, the depositor has the option to opt out of TDS, and pay all the interest at the maturity. The form 26 AS, is linked to the PAN card of the depositor and shows all the TDS deductions made towards the FD.',
                'Lower Interest Rate, While the FD can offer you a higher interest rate of 10%, the other investment avenues, including the mutual funds offer returns that can be more than 20% or 30%. While there are more risks associated with the Mutual Funds (MF), those with a higher risk appetite can make more profits by investing in an MF. ',
                'Interest Rate can be Lower than Inflation, Sometimes the inflation rate may be even higher than the interest rate of the FD.',
                'No Increase in Interests, FDs have the same interest for their complete tenure. Hence the gains are fixed and would not increase'
            ]
        },
    },
    "RD": {
        name: 'RD',
        subName: 'Recurring Deposit',
        icon: require('../images/fd.png'),
        what: {
            title: 'What is Recurring Deposit ?',
            desc: [
                'A Recurring Deposit, commonly known as RD, is a unique term-deposit that is offered by Indian Banks. It is an investment tool which allows people to make regular deposits and earn decent returns on the investment.  Due to the regular deposit factor and an interest component, it often provides flexibility and ease of investments to users/individuals.',
                'However, it is essential to know that RDs are different from Fixed Deposits/FDs . RDs are flexible in most aspects. An RD account holder can choose to invest a fixed amount each month while earning decent interest on the amount. RDs are an ideal saving-cum-investment instrument.',
                'Most major banks in India offer Recurring Deposit Accounts, with a term that often ranges between 6 months  to 10 years, also providing individuals with the opportunity to choose a term according to their needs. However, the interest rate, once determined, does not change during the tenure; and on maturity, the individual will be paid a lumpsum amount which includes the regular investments as well as the interest earned.'
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                'Useful for Planning Short Term Goals - Investing in a Recurring Deposit is completely risk free and gives guaranteed returns.',
                'Investing in Mutual Funds and Stocks might not be a safe option if you have short term investment goals. Because of this nature of RD, investors contemplating on short term goals in a time span of 1 to 3 years choose to involve in Recurring Deposit.',
                'Consider the situations given below, Recurring Deposit might just be the right financial product if you are planning to tackle short term situations that require financial assistance. \n1. Yearly education fee for your kids \n2. If you own a home, furnishing and renovation costs \n3. Overseas vacation',
                'Benefits of Compounding, With FD investments, you can earn interest on interest, thereby enjoying higher returns and faster multiplication of money',
                'Ease of Investment - In a Recurring Deposit scheme, the investor has to deposit a fixed sum every month which will build up a savings discipline. For salaried customers, it will be easier to set aside a particular amount every month as savings and for this, Recurring Deposit is the best option. Also, RD schemes come with guaranteed returns and the rate of interest for RD is locked in which will protect the investor from interest rate swings.',
                'Flexible Recurring Deposit - Some banks offer flexible Recurring Deposit schemes where the investor will not be penalized if the amount is not deposited during a particular month. Also, in a flexible RD scheme, you will be able to withdraw the amount from your RD account anytime you want.'
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                'Liquidity - When you deposit the money in an RD, you will never have the privilege to withdraw any part of the money until the term of the deposit is over. Hence, if you are looking for an easy liquidity instrument, recurring deposits are an absolute bad idea. On the other hand, if you want to discipline your savings this disadvantage may work to your benefit.',
                'Rate of Interest - The interest rate that you earn on recurring deposit is much lower that regular fixed deposit schemes, since your deposits are being made in small installments and not as a whole chunk.',
                'Stringent Monthly Installments - It is not possible in the case of recurring deposits to be able to change your deposit amount, regardless of your financial situation at the moment. With a fixed amount for investment each month, someone with chances of extra or less funds for the deposit should be discouraged from opting for this product.'
            ]
        },
    },
    "EPF": {
        name: 'EPF',
        subName: 'Employee Provident Fund',
        icon: require('../images/epf.png'),
        what: {
            title: 'What is Employee Provident Fund?',
            desc: [
                'Employee Provident Fund (EPF) is a scheme in which you can create wealth throughout your working years as an employee at a government or private organisation.',
                'This amount earns interest, and you can use it to finance a part of post-retirement life or other goals. In this scheme, both you and your employer make contributions towards your EPF.',
                "You can claim the entire amount at the time of your retirement or two months after changing your job. You and your employer need to transfer 10% or 12% of your basic salary to contribute towards EPF. However, if you are a woman, you only need to contribute 8% of your basic salary for the first three years. During this period, your employer's EPF contribution will remain 12%. For sick units or establishments with less than 20 employees, the rate is 10% as per Employees' Provident Fund Organisation's (EPFO) guidelines.",
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                "Capital appreciation - The PF online scheme offers a pre-fixed interest on the deposit held with the EPF India. Additionally, rewards extended at maturity further ensure growth in the employees' funds and accelerate capital appreciation.",
                "Corpus for Retirement - Around 8.5% of an employer's contribution is directed towards the Employee Pension Scheme. In the long run, the sum deposited towards the employee provident fund helps to build a healthy retirement corpus. Such a corpus would extend a sense of financial security and independence to them after retirement.",
                "Emergency Corpus - Uncertainties are a part of life. Therefore, being financially prepared to face such unwarranted situations is the best an individual can do to deal with exigencies. An EPF fund acts as an emergency corpus when an individual requires emergency funds.",
                "Tax-saving - Under Section 80C of the Indian Income Tax Act, an employee's contribution towards their PF account is deemed eligible for tax exemption. Moreover, earnings generated through EPF schemes are exempted from taxes. Such exemption can be availed up to a limit of Rs. 1.5 Lakh. The tax benefits applicable to the Employees Provident Fund scheme ensure higher earnings to the members. It further improves savings and an individual's purchasing power in the long-term.",
                "Easy premature withdrawal - Members of EPF India are entitled to avail benefits of partial withdrawal. Individuals can withdraw funds from their PF account to meet their specific requirements like pursuing higher education, constructing a house, bearing wedding expenses or for availing medical treatment."
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                "EPF account requires you to deposit a regular amount of money throughout your professional life. It is only after your retirement that you get the returns. If you are in dire need of money during your working life, you cannot get the cash.",
                "During their working life, employees cannot withdraw money from the fund. Premature withdrawal is only allowed under certain specified circumstances, and only after producing various documents and completing a complicated and hassling list of paperwork.",
                "The account cannot be closed earlier than retirement, except only on the death of the subscriber.",
                "The factor of inflation is a significant one when it comes to EPF. When you retire, the cost of living would be even more expensive than it is now, due to the ever-growing inflation. In that costly market, your savings would seem meagre and will be stripped off of any real value.",
                "EPF scheme is a list of compulsions that are strictly enforced upon the subscriber. You are forced to put down a part of your salary as savings every month. This reduces your financial capability and dictates you to give up a chunk of your money that could have been used for something else, maybe even on a more profitable investment scheme."
            ]
        },
    },
    "NPS": {
        name: 'NPS',
        subName: 'National Pension Scheme',
        icon: require('../images/epf.png'),
        what: {
            title: 'What is National Pension Scheme?',
            desc: [
                "National Pension System (NPS) is a voluntary, defined contribution retirement savings scheme designed to enable the subscribers to make optimum decisions regarding their future through systematic savings during their working life. NPS seeks to inculcate the habit of saving for retirement amongst the citizens. It is an attempt towards finding a sustainable solution to the problem of providing adequate retirement income to every citizen of India.",
                "Under NPS, individual savings are pooled in to a pension fund which are invested by PFRDA regulated professional fund managers as per the approved investment guidelines in to the diversified portfolios comprising of Government Bonds, Bills, Corporate Debentures and Shares. These contributions would grow and accumulate over the years, depending on the returns earned on the investment made.",
                "At the time of normal exit from NPS, the subscribers may use the accumulated pension wealth under the scheme to purchase a life annuity from a PFRDA empaneled Life Insurance Company apart from withdrawing a part of the accumulated pension wealth as lump-sum, if they choose so."
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                "Flexible - NPS offers a range of investment options and choice of Pension Funds (PFs) for planning the growth of the investments in a reasonable manner and monitor the growth of the pension corpus. Subscribers can switch over from one investment option to another or from one fund manager to another.",
                "Simple - Opening an account with NPS provides a Permanent Retirement Account Number (PRAN), which is a unique number and it remains with the subscriber throughout his lifetime. The scheme is structured into two tiers : \n1. Tier-I account: This is the non-withdrawable permanent retirement account into which the regular contributions made by the subscriber are credited and invested as per the portfolio/fund manager chosen of the subscriber. \n2. Tier-II account: This is a voluntary withdrawable account which is allowed only when there is an active Tier I account in the name of the subscriber. The withdrawals are permitted from this account as per the needs of the subscriber as and when required.",
                "Portable - NPS provides seamless portability across jobs and across locations. It would provide hassle-free arrangement for the individual subscribers while he/she shifts to the new job/location, without leaving behind the corpus build, as happens in many pension schemes in India.",
                "Well Regulated - NPS is regulated by PFRDA, with transparent investment norms, regular monitoring and performance review of fund managers by NPS Trust. The account maintenance costs under NPS are the lowest as compared to similar pension products across the globe. While saving for a long-term goal such as retirement, the cost matters a lot as the charges can shave off a significant amount from the corpus over 35-40 years of investment period.",
                "Dual benefit of Low Cost and Power of compounding - Till the retirement, pension wealth accumulation grows over the period of time with a compounding effect. The account maintenance charges being low, the benefit of accumulated pension wealth to the subscriber eventually become large.",
                "Once the PRAN account is opened, an online login id and password is provided to the subscriber. He/she can login and view/manage his NPS account online, over a click."
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                "Withdrawal Limits - NPS restricts all kinds of withdrawals, before the subscriber reaches the age of 60 years. The subscriber can make the first withdrawal from NPS, after 10 years of opening the account, and a total of 3 withdrawals, till he or she reaches the age of 60 years.",
                "Taxation at the Time of Withdrawal - The NPS corpus, which the subscriber can use for buying annuity or for drawing pensions, is taxable, when the schemes matures. 60% of the investment in the NPS is taxed upon by the Government of India, while 40% escapes taxation.",
                "Account Opening Restrictions - A person can maintain a single NPS account, in his or her lifetime. While the PRAN can be easily ported across the geography and jobs, 1 single individual will get a single PRAN.",
                "Investment Restrictions - The subscriber cannot invest more than 50% of his or her total investment in the NPS account, towards the equities.",
                "No Guaranteed Returns - While NPS is a government scheme, the corpus is created according to the returns, which are generated under the corporate bonds, government securities, and the equity. Hence, the market fluctuations can affect the returns/gains adversely."
            ]
        },
    },
    "PPF": {
        name: 'PPF',
        subName: 'Public Provident Fund',
        icon: require('../images/ppf.png'),
        what: {
            title: 'What is Public Provident Fund ?',
            desc: [
                "A Public provident fund scheme is ideal for individuals with a low risk appetite. Since this plan is mandated by the government, it is backed up with guaranteed returns to protect the financial needs of the masses in India. Further, invested funds in the PPF account are not market-linked either.",
                "Investors can also undertake the public provident fund regime to diversify their financial and investment portfolios. At times of downswing of the business cycle, PPF accounts can provide stable returns on investment annually."
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                "Long Term Capital Appreciation, PPF mobilizes small savings from investors into long-term capital appreciation coupled with some interest in it. This is the governmentâ€™s objective in encouraging investors to go for a Public Provident Fund investment. Hence, it comes with a lock-in for 15 years and further extensions in blocks of 5 years. PPF investment is the best post-retirement fund to serve the financial requirements of old age.",
                "Low Risk & Consistent Returns, Risk-averse investors should open a PPF investment account. Investors who want consistent returns as well as security of the principal amount. The sovereign guarantee makes it a safer investment plan. Invest the idle money or save a part of the income to accrue returns on the same through the safe investment of the PPF scheme.",
                "Loans Against PPF, An additional benefit of a PPF investment is that it not only helps to attain future goals but also to fulfill short-term goals. It is also helpful in times of financial woes when you can request a loan against PPF. You can take loans against PPF between the 3rd and 6th years. The loan amount disbursed is a maximum of 25% of the second yearâ€™s investment amount. The second year's investment is that of the year that precedes the loan application year. If you repay it in 36 months or by the 6th year, then after complete repayment you can go for a second loan in the 6th year.",
                "Partial Withdrawal, You can partially withdraw money from PPF, other than loans when facing financial hardships. You can make one partial withdrawal from the 5th year onwards. Partial money withdrawals from the PPF investment account can be in either way as below - \n1. 50% of the invested amount until the 4th year when you can request it in the 5th year \n2. 50% of the account balance until the preceding financial year when you request in the current year after 5 years or more",
                "Premature Closing,  Although PPF is for long-term investment, there is an option for a premature closing. It is to support investors and use their money when in dire need of it. However, one can go for premature withdrawal of all invested money only after 5 years. It is allowed under the below listed certain conditions only: \n1. When the PPF account holder or dependent spouse, children, parents suffer from a life-threatening disease or critical illness. You will need to submit all relevant medical reportsand other relevant documents. You can use the PPF account balance for medical purposes\n2. For funding the higher education of children. Bring admission confirmation letters/documents and fee receipts to get financial assistance by closing the PPF investment account prematurely\n3. NRIs cannot have a PPF account. You can go for premature closing when there is a change of residence status. Present your Passport, Visa, ITRs (Income Tax Returns), etc. as required. An investor has to be an Indian citizen for holding a PPF account. It is one of the eligibility criteria for PPF account\nThe rate of interest (ROI) applied for premature closing is 1% less than the currently prevailing one.",
                "Tax Saver Benefits, PPF investment has tax saver benefits under Section 80C deductions. It is one of the few investment plans in India that enjoys the advantage of Exempt-Exempt-Exempt (EEE) tax status. The tax-exempted amount deposited in the Public Provident Fund in each financial year up to Rs. 1,50,000 is exempted from tax. The interest earned on PPF is also free from tax liabilities. Also, at the time of withdrawal, the maturity amount including the principal sum and the interest is free from taxation."
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                "The lock-in period is long-term, i.e., for 15 years.",
                "Joint accounts are not permitted, i.e., one person can only handle one account except it is of a minor.",
                "NRIs and HUFs cannot open an open account.",
                "There is a maximum limit of Rs.1.5 lakhs laid for depositing in a PPF account.",
                "There is no liquidity."
            ]
        },
    },
    "SSY": {
        name: 'SSY',
        subName: 'Sukanya Samriddhi Yojana',
        icon: require('../images/ppf.png'),
        what: {
            title: 'What is Sukanya Samriddhi Yojana ?',
            desc: [
                "Sukanya Samriddhi Yojana (SSY) is a small deposit scheme for the girl child launched as a part of the 'Beti Bachao Beti Padhao' campaign. It is currently 8.1 per cent and provides income-tax benefit under section 80 C of the Income Tax Act,1961. Even the returns are tax free in the scheme.",
                "A Sukanya Samriddhi Account can be opened any time after the birth of a girl till she turns 10, with a minimum deposit of Rs 250 (Earlier it was Rs 1,000). In subsequent years, a minimum of Rs 250 and a maximum of Rs 1.5 lakh can be deposited during the ongoing financial year.",
                "The account can be opened in any post office or authorised branches of commercial banks."
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                "Need a small amount of INR 250 for opening an account - You can open an SSY deposit with a minimum deposit of INR 250, which was INR 1,000 before 5th July 2018.  Maximum deposit amount can be up to INR 1.5 lakh. Do note that it is mandatory to make a deposit until 15 years from the date of account opening, failing which the account will go under ‘Account under default'. You can reactivate the account with a fine of INR 50 per year that you defaulted on making a deposit. The reactivation can happen until 15 years from account opening.",
                "Helps save for your girl child’s educational expenses - If you are a parent or a guardian of the girl aged less than 10 years, you are eligible to open a SSY Account for no more than two daughters. Here’s the big bonus. After the girl turns 18, 50 per cent of the balance can be withdrawn to meet educational expenses. Proof of admission must be provided.",
                "You only need to deposit for 15 years - You need not make any deposits after 15 years until the deposit matures, which is 21 years from the date of account opening. You will continue to accrue the interest on the deposit.",
                "The Triple Tax Benefits you cannot ignore - \n1. Deposits up to INR 1.5 lakh is eligible for a deduction under Section 80C of Income Tax Act. \n2. The interest earned on the deposit is tax-free. The interest is compounded annually. \n3. Even the amount you receive upon maturity is tax-free."
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                "Premature Withdrawal - If considering this account, one should see as long term instrument only, as premature withdrawal is not allowed except in case of death of girl child or on maturity.",
                "No Online Facility - Another drawback as of now is that one cannot invest money online, either by cheque, DD can be deposited.",
                "Interest Rate May Vary - Every year the government will decide the interest part, which will be linked to government bonds. However, one should check whether it can combat inflation rate. Returns can be low when compared to market linked schemes.",
                "Maximum Two Accounts - Another restriction with this account is an individual can open any two accounts for two girls. He is not eligible to open another account if he has three daughters.",
            ]
        },
    },
    "Loan": {
        name: 'Loan',
        subName: 'EMI - Equated Monthly Installment',
        icon: require('../images/loan.png'),
        what: {
            title: 'What is Loan ?',
            desc: [
                'A loan is a sum of money that one or more individuals or companies borrow from banks or other financial institutions so as to financially manage planned or unplanned events. In doing so, the borrower incurs a debt, which he has to pay back with interest and within a given period of time.',
            ]
        },
        types: {
            title: 'Types of Loan',
            desc: [
                {
                    term: 'Personal Loan',
                    meaning: "Whenever there is a liquidity issue, you can go for a personal loan. The purpose of taking a personal loan can be anything from repaying an old debt, going on vacation, funding for the downpayment of a house/car, and medical emergency to purchasing big-ticket furniture or gadgets. Personal loans are offered based on the applicant's past relationship with the lender and credit score."
                },
                {
                    term: 'Vehicle Loan',
                    meaning: 'Vehicle loans finance the purchase of two-wheeler and four-wheeler vehicles. Further, the four-wheeled vehicle can be a new one or a used one. Based on the on-road price of the vehicle, the loan amount will be determined by the lender. You may have to get ready with a downpayment to get the vehicle as the loan rarely provides 100% financing. The vehicle will be owned by the lender until full repayment is made.'
                },
                {
                    term: 'Home Loan',
                    meaning: 'Home loans are dedicated to receiving funds in order to purchase a house/flat, construct a house, renovate/repair an existing house, or purchase a plot for the construction of a house/flats. In this case, the property will be held by the lender and the ownership will be transferred to the rightful owner upon completion of repayments.'
                }
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                'Flexibility - A bank loan allows one to repay as per convenience as long as the instalments are regular and timely. Unlike an overdraft where all the credit is deducted in go. Or a consumer credit card where the maximum limit cannot be utilised in one go.',
                'Cost Effectiveness - When it comes to interest rates, bank loans are usually the cheapest option compared to overdraft and credit card.',
                'Profit Retention - When you raise funds through equity you have to share profits with shareholders. However, in a bank loan raised finance you do not have to share profits with the bank.',
                'Benefit of Tax - Government makes the interest payable on the loan a tax-deductible item when the loan has been taken for business purpose.'
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                'Hard Prerequisite - Since big finance from a bank is based on collateral, most young businesses will find it hard to finance the operations based on bank loan.',
                'Irregular Payment Amounts - Over a long duration payback via monthly instalment might witness variation in the rate of interest. This means that the EMI will not be constant, rather it will change as per the influence of the market on the interest applicable.'
            ]
        },
    }, "SimpleInterest": {
        name: 'Simple Interest',
        subName: 'Simple Interest',
        icon: require('../images/simple_interest.png'),
        what: {
            title: 'What is Simple Interest ?',
            desc: [
                'Simple interest is a technique used to calculate the proportion of interest paid on a sum over a set time period at a set rate.',
                'The principal amount remains constant in simple interest. Simple interest is a straightforward and easy technique for calculating interest in money. Interest is always applied to the initial principal amount under the simple interest method, and the rate of interest is the same for each time cycle. When we deposit money in a bank, the bank pays us interest on our investment. Banks charge various sorts of interest, one of which is simple interest.'
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                'Set payment amount, for a set time frame',
                "Making larger payments than required reduces your principal balance more quickly, and therefore reduces your remaining interest charges",
                "You're not paying 'interest on interest'",
                "Simple interest loans can be paid off early"
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                'Late payments typically incur late payment fees, which are spelled out in your car loan contract. These fees can really add up, and have to be paid at the end of the loan term in order for a lender to release the lien on the title.'
            ]
        },
    }, "CompoundInterest": {
        name: 'Compound Interest',
        subName: 'Compound Interest',
        icon: require('../images/compound_interest.png'),
        what: {
            title: 'What is Compound Interest ?',
            desc: [
                'Compound interest, or compounding interest, is interest earned from the original principal amount of a deposit or investment, plus any accumulated interest from prior earning periods. Compound interest is also known as “interest on interest” because when investors opt to keep accrued interest in their account rather than withdrawing it, the interest becomes part of the principal where it can then earn more interest.',
                'The rate at which it accrues is the annual equivalent rate or annual percentage yield (APY), which is based on the compounding period, or the time in which compounded interest is regularly capitalized, or credited to the initial principal.'
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                "Compound interest has its share of advantages for consumers and financial institutions alike. The power of compound interest lies in its so-called “snowball effect,” which is a metaphor that compares its ability to build wealth over time to a snowball growing in size and mass as it rolls down a hill.",
                "Even minor investments can, over time, yield major returns with compound interest. The snowball effect is particularly beneficial for investors who begin saving in their twenties. While they will initially save less due to regular investments, they will also have a great deal of money by the time they retire",
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                'One of the downsides to compound interest is that its benefits apply to financial institutions and consumers. Lenders and credit card issuers can apply compound interest to the repayment of student loans and credit card debt. This interest can grow out of control over time, especially for consumers paying the minimum monthly amount on these bills.',
                "Compound interest is always calculated before you make a payment, and not after you've sent in your payment. If you are paying interest regularly and are either late or miss a payment, your rate of return can decrease and cost you money."
            ]
        },
    },
    "ProfitLoss": {
        name: 'Profit Loss',
        subName: 'Profit Loss',
        icon: require('../images/profit_loss.png'),
        what: {
            title: 'What is Profit or Loss ?',
            desc: [
                'Profit describes the financial benefit realized when revenue generated from a business activity exceeds the expenses, costs, and taxes involved in sustaining the activity in question. ',
                'A loss is made when the revenue from sales is not enough to cover all the costs of production.',
                'The most common types of loss refer to the amount that an asset decreases in value over the course of its useful life for your business'
            ]
        }
    },
    // "Cash": {
    //     name: 'Cash',
    //     subName: 'Cash Calculator',
    //     icon: require('../images/profit_loss.png'),
    //     what: {
    //         title: 'What is Cash Calculator ?',
    //         desc: [
    //             'Cash calculator can be used to add the different notes and their counts and calculator will calculate the final amount in real time.',
    //         ]
    //     }
    // },
    "GST": {
        name: 'GST',
        subName: 'Goods and Services Tax',
        icon: require('../images/gst.png'),
        what: {
            title: 'What is GST ?',
            desc: [
                'GST is known as the Goods and Services Tax. It is an indirect tax which has replaced many indirect taxes in India such as the excise duty, VAT, services tax, etc. The Goods and Service Tax Act was passed in the Parliament on 29th March 2017 and came into effect on 1st July 2017.',
                'In other words,Goods and Service Tax (GST) is levied on the supply of goods and services. Goods and Services Tax Law in India is a comprehensive, multi-stage, destination-based tax that is levied on every value addition. GST is a single domestic indirect tax law for the entire country.',
                'Under the GST regime, the tax is levied at every point of sale. In the case of intra-state sales, Central GST and State GST are charged. All the inter-state sales are chargeable to the Integrated GST.'
            ]
        },
        advantages: {
            title: 'Advantages',
            desc: [
                'GST has mainly removed the cascading effect on the sale of goods and services. Removal of the cascading effect has impacted the cost of goods. Since the GST regime eliminates the tax on tax, the cost of goods decreases.',
                'Also, GST is mainly technologically driven. All the activities like registration, return filing, application for refund and response to notice needs to be done online on the GST portal, which accelerates the processes.'
            ]
        }
    },
    "SGB": {
        name: 'SGB',
        subName: 'Sovereign Gold Bond',
        icon: require('../images/ppf.png'),
        what: {
            title: 'What is Sovereign Gold Bond ?',
            desc: [
                "Sovereign gold bonds or SBGs are gold bonds issued by the Reserve Bank of India (RBI) on behalf of the Government of India. The gold in this bond is sold on a per unit basis such that every unit derives its value from underlying one gram gold with 999 purity. The cost is calculated by taking an average of closing prices of gold for the latest three working days preceding the subscription period. These closing prices are published by the India Bullion and Jewellers Association Limited (IBJAL). The redemption price is also calculated on the latest base data from the same source.",
                "SGBs are easy to buy and handle with a a term of eight years and an interest rate of 2.5% per annum paid on a half-yearly basis. Every individual purchase is restricted to a maximum of 4kgs per financial year and in case of a trust, it is restricted to 20kgs. The only document mandatory for the purchase of SGBs is a PAN card without which no investment in these bonds is permitted."
            ]
        },
        advantages: {
            title: "Benefits",
            desc: [
                "SGB is a good option for investors who wish to buy gold only for the purpose of investment. SGBs ensures the quality of gold is protected and investors are secured against risk.",
                "They are also able to save on the cost of storing physical gold as these bonds are in a digital form and are kept in an investor’s demat account.",
                "The 2.5% interest makes this option attractive because unlike physical gold, investors earn a passive income on their gold, which is directly credited to the bondholders’ accounts.",
                "These bonds make for good market-linked gifts.",
                "The capital gain on the maturity amount of these bonds is completely tax exempt making them attractive for long-term investors."
            ]
        },
        disadvantages: {
            title: "Disadvantages",
            desc: [
                "Long maturity period - The eight-year maturity period may make a lot of investors uninterested in gold bonds. Although the maturity period is long, this long maturity period can help investors to avoid volatility in the gold price.",
                "Only available in tranches - Unlike other investment options, you can’t invest in sovereign gold bonds at any time. You can easily invest in Sovereign gold bonds from the primary market during a specific period as per the RBI’s calendar.",
                "Loss of capital - As the value of the bond is closely connected to the price of gold on the international markets, your investment in SGB may result in a capital loss on your initial investment if the price of gold comes down to the price of gold you bought the bond."
            ]
        },
    },
    "CGT": {
        name: 'CGT',
        subName: 'Capital Gains Tax',
        icon: require('../images/ppf.png'),
        what: {
            title: 'What Is the Capital Gains Tax ?',
            desc: [
                "Capital gain can be defined as any profit that is received through the sale of a capital asset. The profit that is received falls under the income category. Therefore, a tax needs to be paid on the income that is received. The tax that is paid is called capital gains tax.",
                "It can either be long term or short term. The tax that is levied on long term and short term gains starts from 10% and 15%, respectively.",
                "Under the Income Tax Act, capital gains tax in India need not be paid in case the individual inherits the property and there is no sale. However, if the person who has inherited the property decides to sell it, tax will have to be paid on the income that has been generated from the sale."
            ]
        },
        types: {
            title: 'Types of Capital Gains Tax',
            desc: [
                {
                    term: 'Long-term Capital Asset',
                    meaning: "Long-term capital assets are considered as an asset which is held by the taxpayers for a time period of more than 36 months before the transfer. In case the above-listed assets are held for a period of more than 12 months then they are considered as a long-term capital asset."
                },
                {
                    term: 'Short-term Capital Asset',
                    meaning: 'Short-term capital assets are considered as assets which are held by the taxpayers for a time period of 36 months or less from the date of its transfer. Some of the short-term capital assets are held 12 months or less. This is only applicable if the transfer date of asset is after 10th July 2014 (irrespective of the date of purchase). These assets are - \n1. Equity shares in a company registered on a recognized stock exchange in India. \n2. Securities such as bonds, debentures, government securities, etc. registered on a recognized stock exchange in India. \n3. UTI units, units of equity oriented mutual fund, whether quoted or not.'
                },
            ]
        },
    },
}

export default calculatorInfo;