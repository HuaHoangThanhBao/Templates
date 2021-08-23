const bill = document.querySelector('#bill-inp');
const numberOfPeople = document.querySelector('#number-of-people-inp');
const billPerTxt = document.querySelector('#bill-per-txt');
const totalPerTxt = document.querySelector('#total-per-txt');
const resetBtn = document.querySelector('.reset-btn');

const tips = [
    {
        tip: {
            val: 5,
            type: "normal",
            id: "five-perc"
        }
    },
    {
        tip: {
            val: 10,
            type: "normal",
            id: "ten-perc"
        }
    },
    {
        tip: {
            val: 15,
            type: "normal",
            id: "fifteen-perc"
        }
    },
    {
        tip: {
            val: 20,
            type: "normal",
            id: "twenty-perc"
        }
    },
    {
        tip: {
            val: 25,
            type: "normal",
            id: "twenty-five-perc"
        }
    },
    {
        tip: {
            type: "custom",
            id: "custom-perc"
        }
    }
]

tips.forEach((element) => {
    const obj = document.querySelector(`#${element.tip.id}`);
    if (element.tip.type == "normal") {
        obj.addEventListener('click', function () {
            if (bill.value != "" && numberOfPeople.value != "") {
                billPerTxt.innerHTML = "$" + tipCal(bill.value, numberOfPeople.value, element.tip.val).toFixed(2);
                totalPerTxt.innerHTML = "$" + totalCal(bill.value, numberOfPeople.value, element.tip.val).toFixed(2);
            }
            else {
                alert('Vui lòng điền bill và số người')
            }
        })
    }
    if (element.tip.type == "custom") {
        obj.addEventListener('keyup', function(){
            if (bill.value != "" && numberOfPeople.value != "") {
                billPerTxt.innerHTML = "$" + tipCal(bill.value, numberOfPeople.value, obj.value).toFixed(2);
                totalPerTxt.innerHTML = "$" + totalCal(bill.value, numberOfPeople.value, obj.value).toFixed(2);
            }
            else {
                alert('Vui lòng điền bill và số người');
            }
        })
    }
});

resetBtn.addEventListener('click', function () {
    billPerTxt.innerHTML = "$0";
    totalPerTxt.innerHTML = "$0";
})

function tipCal(billVal, amountPeopleVal, percenVal) {
    return (billVal / amountPeopleVal * percenVal / 100);
}

function totalCal(billVal, amountPeopleVal, percenVal) {
    return tipCal(billVal, amountPeopleVal, percenVal) + (billVal / amountPeopleVal);
}