const combinations = (n, k) => {
    const combos = [];

    let head, tail;

    if (k === 1) {
        return n;
    }

    for (let i = 0; i < n.length; i++) {

        // Kesme işlemi yapar, 
        // ilk index için (i==0) 0'dan başla 
        // (0+1) 1'e kadar 
        // Kes ve yeni dizi oluştur. 
        // result -> [1]
        head = n.slice(i, i + 1);


        // Kesme işlemi yapar, 
        // ilk index için (i==0 || i + 1) 1'dan başla
        // Kes ve yeni dizi oluştur.
        // result -> [2, 3, 4, 5]
        // ----------------------
        // (k - 1 || 3 - 1) 2 ile
        // Resursive function'a gir
        // -> result combinations([2,3,4,5], 2)
        tail = combinations(n.slice(i + 1), k - 1);


        console.log(head, tail);

        // Head ve Tail yukarıdaki kurala göre tanımlandı
        // Tail uzunluğu 
        for (let j = 0; j < tail.length; j++) {
            let combo = head.concat(tail[j]); // Burada head ile tail birleştirip kümezisi oluştutur.
            combos.push(combo);
        }
    }

    return data;
}

console.log(combinations([1, 2, 3, 4, 5], 3));
