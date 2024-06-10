function download() {
    document.getElementById('download').disabled = 'true';
    const element1 = document.getElementById('top');
    const element2 = document.getElementById('div_tables1');
    const element3 = document.getElementById('div_tables2');
    const element4 = document.getElementById('div_tables3');
    const element5 = document.getElementById('div_tables4');

    var doc = new jsPDF();

    html2canvas(element1).then(function (canvas1) {
        const imgTop = canvas1.toDataURL();
        doc.addImage(imgTop, 18, 10, 172, 31);
        html2canvas(element2).then(function (canvas2) {
            const imgTable1 = canvas2.toDataURL();
            doc.addImage(imgTable1, -20, 45, 250, 118);

            html2canvas(element3).then(function (canvas3) {
                const imgTable2 = canvas3.toDataURL();
                doc.addImage(imgTable2, -20, 190, 250, 90);

                html2canvas(element4).then(function (canvas4) {
                    doc.addPage();
                    const imgTable3 = canvas4.toDataURL();
                    doc.addImage(imgTable3, 10, 10, 190, 90);

                        html2canvas(element5).then(function (canvas5) {
                            const imgTable4 = canvas5.toDataURL();
                            doc.addImage(imgTable4, 10, 90, 190, 121);

                            doc.save('clinical_chart.pdf');
                            document.getElementById('download').disabled = 'false';
                        });
                });
            });
        });
    });
}