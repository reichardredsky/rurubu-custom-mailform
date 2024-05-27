export default function scriptInit() {
    const license = document.getElementById('license');
    const sameAddressType = document.getElementById('same');
    const otherAddressType = document.getElementById('other');
    const sendAddress = document.getElementById('sendAddress');
    const businessType = document.getElementById('businessType');

    const onChangeAddressType = (evt) => {
        if (!sendAddress) return;

        if (evt.target.value === 'same') {
            
            sendAddress.classList.add('tw-hidden');
        } else {
            sendAddress.classList.remove('tw-hidden');
        }
    }

    sameAddressType.addEventListener('change', onChangeAddressType);
    otherAddressType.addEventListener('change', onChangeAddressType);


    if (businessType) {
        businessType.addEventListener('change', () => {
            if (businessType.value === '法人経営') {
                document.getElementById('companyNameBlock').style.display = 'grid';
            } else {
                document.getElementById('companyNameBlock').style.display = 'none';
            }
        });
    }




    if (license) {
        license.addEventListener('change', () => {
            const licenseGetDay = document.getElementById('licenseGetDay');
            if (license.value === 'notyet') {
                licenseGetDay.querySelectorAll('select').forEach((select) => {
                    select.removeAttribute('disabled');
                });
            } else {
                licenseGetDay.querySelectorAll('select').forEach((select) => {
                    select.setAttribute('disabled', 'disabled');
                });
                
            }

        });
    }
}