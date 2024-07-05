const parcelas = document.querySelectorAll(".parcela");


parcelas.forEach(parcela => {

    const valores = parcela.querySelector('.valores');
    const item1 = parcela.querySelector('.item1');
    const item2 = parcela.querySelector('.item2');
    const item3 = parcela.querySelector('.item3');
    const item4 = parcela.querySelector('.item4');
    const seta = parcela.querySelector('.seta');


    parcela.addEventListener('click', () => {

        parcela.classList.toggle('expandir');


        if (parcela.classList.contains('expandir')) {



            valores.style.display = 'block';
            item1.style.display = 'block';
            item2.style.display = 'block';
            item3.style.display = 'block';
            item4.style.display = 'block';
            seta.innerText = `∧`;

            setTimeout(() => {
                valores.style.opacity = '1';
                item1.style.opacity = '1';
                item2.style.opacity = '1';
                item3.style.opacity = '1';
                item4.style.opacity = '1';
            }, 100);

        } else {

            valores.style.opacity = '0';
            item1.style.opacity = '0';
            item2.style.opacity = '0';
            item3.style.opacity = '0';
            item4.style.opacity = '0';

            valores.style.display = 'none';
            item1.style.display = 'none';
            item2.style.display = 'none';
            item3.style.display = 'none';
            item4.style.display = 'none';
            seta.innerText = `∨`;

        }
    })
})