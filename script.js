document.addEventListener("DOMContentLoaded", function () {
    let projects = [
        { name: "Andi Setiawan", client: "andi.setiawan@gmail.com", lisensi: "Terkunci", saldo: 5200000 },
        { name: "Budi Santoso", client: "budi.santoso@gmail.com", lisensi: "Terkunci", saldo: 8750000 },
        { name: "Citra Dewi", client: "citra.dewi@gmail.com", lisensi: "Terkunci", saldo: 6400000 },
        { name: "Dewi Lestari", client: "dewi.lestari@gmail.com", lisensi: "Terkunci", saldo: 7300000 },
        { name: "Eko Prasetyo", client: "eko.prasetyo@gmail.com", lisensi: "Terkunci", saldo: 9100000 },
        { name: "Fajar Nugroho", client: "fajar.nugroho@gmail.com", lisensi: "Terkunci", saldo: 4800000 },
        { name: "Gita Rahmawati", client: "gita.rahmawati@gmail.com", lisensi: "Terkunci", saldo: 6000000 },
        { name: "Hendra Wijaya", client: "hendra.wijaya@gmail.com", lisensi: "Terkunci", saldo: 7500000 },
        { name: "Intan Permatasari", client: "intan.permatasari@gmail.com", lisensi: "Terkunci", saldo: 8200000 },
        { name: "Joko Susanto", client: "joko.susanto@gmail.com", lisensi: "Terkunci", saldo: 3900000 },
        { name: "Kiki Amalia", client: "kiki.amalia@gmail.com", lisensi: "Terkunci", saldo: 5600000 },
        { name: "Lina Sari", client: "lina.sari@gmail.com", lisensi: "Terkunci", saldo: 7100000 },
        { name: "Maya Indah", client: "maya.indah@gmail.com", lisensi: "Terkunci", saldo: 8400000 },
        { name: "Nina Kurniawati", client: "nina.kurniawati@gmail.com", lisensi: "Terkunci", saldo: 9200000 },
        { name: "Omar Hidayat", client: "omar.hidayat@gmail.com", lisensi: "Terkunci", saldo: 6700000 },
        { name: "Putri Ayu", client: "putri.ayu@gmail.com", lisensi: "Terkunci", saldo: 5300000 },
        { name: "Rudi Hartono", client: "rudi.hartono@gmail.com", lisensi: "Terkunci", saldo: 8000000 },
        { name: "Siti Nurhaliza", client: "siti.nurhaliza@gmail.com", lisensi: "Terkunci", saldo: 4500000 },
        { name: "Tina Melati", client: "tina.melati@gmail.com", lisensi: "Terkunci", saldo: 6000000 },
        { name: "Umar Faruq", client: "umar.faruq@gmail.com", lisensi: "Terkunci", saldo: 7200000 },
        { name: "Ayu Lestari", client: "ayu.lestari@gmail.com", lisensi: "Terkunci", saldo: 7500000 },
        { name: "Budi Prasetyo", client: "budi.prasetyo@gmail.com", lisensi: "Terkunci", saldo: 6200000 },
        { name: "Cindy Rahma", client: "cindy.rahma@gmail.com", lisensi: "Terkunci", saldo: 5400000 },
        { name: "Dani Setiawan", client: "dani.setiawan@gmail.com", lisensi: "Terkunci", saldo: 8300000 },
        { name: "Eka Putri", client: "eka.putri@gmail.com", lisensi: "Terkunci", saldo: 9100000 },
        { name: "Fahmi Nugroho", client: "fahmi.nugroho@gmail.com", lisensi: "Terkunci", saldo: 4700000 },
        { name: "Gina Sari", client: "gina.sari@gmail.com", lisensi: "Terkunci", saldo: 6800000 },
        { name: "Hendra Wijaya", client: "hendra.wijaya@gmail.com", lisensi: "Terkunci", saldo: 7200000 },
        { name: "Intan Permatasari", client: "intan.permatasari@gmail.com", lisensi: "Terkunci", saldo: 8000000 },
        { name: "Joko Santoso", client: "joko.santoso@gmail.com", lisensi: "Terkunci", saldo: 5900000 },
        { name: "Kiki Amalia", client: "kiki.amalia@gmail.com", lisensi: "Terkunci", saldo: 8500000 },
        { name: "Lina Sari", client: "lina.sari@gmail.com", lisensi: "Terkunci", saldo: 6400000 },
        { name: "Maya Indah", client: "maya.indah@gmail.com", lisensi: "Terkunci", saldo: 7700000 },
        { name: "Nina Kurniawati", client: "nina.kurniawati@gmail.com", lisensi: "Terkunci", saldo: 9300000 },
        { name: "Omar Hidayat", client: "omar.hidayat@gmail.com", lisensi: "Terkunci", saldo: 6000000 },
        { name: "Putri Ayu", client: "putri.ayu@gmail.com", lisensi: "Terkunci", saldo: 5300000 },
        { name: "Rudi Hartono", client: "rudi.hartono@gmail.com", lisensi: "Terkunci", saldo: 8000000 },
        { name: "Siti Nurhaliza", client: "siti.nurhaliza@gmail.com", lisensi: "Terkunci", saldo: 4500000 },
        { name: "Tina Melati", client: "tina.melati@gmail.com", lisensi: "Terkunci", saldo: 6000000 },
        { name: "Umar Faruq", client: "umar.faruq@gmail.com", lisensi: "Terkunci", saldo: 7200000 },
        { name: "Aldo Prabowo", client: "aldo.prabowo@gmail.com", lisensi: "Terkunci", saldo: 7500000 },
        { name: "Bella Sari", client: "bella.sari@gmail.com", lisensi: "Terkunci", saldo: 6200000 },
        { name: "Cahya Nugraha", client: "cahya.nugraha@gmail.com", lisensi: "Terkunci", saldo: 5400000 },
        { name: "Dewi Anggraini", client: "dewi.anggraini@gmail.com", lisensi: "Terkunci", saldo: 8300000 },
        { name: "Eko Setiawan", client: "eko.setiawan@gmail.com", lisensi: "Terkunci", saldo: 9100000 },
        { name: "Fiona Rahma", client: "fiona.rahma@gmail.com", lisensi: "Terkunci", saldo: 4700000 },
        { name: "Guntur Prasetyo", client: "guntur.prasetyo@gmail.com", lisensi: "Terkunci", saldo: 6800000 },
        { name: "Hani Lestari", client: "hani.lestari@gmail.com", lisensi: "Terkunci", saldo: 7200000 },
        { name: "Iwan Kurniawan", client: "iwan.kurniawan@gmail.com", lisensi: "Terkunci", saldo: 8000000 },
        { name: "Jasmine Putri", client: "jasmine.putri@gmail.com", lisensi: "Terkunci", saldo: 5900000 },
        { name: "Kamaludin", client: "kamaludin@gmail.com", lisensi: "Terkunci", saldo: 8500000 },
        { name: "Larasati", client: "larasati@gmail.com", lisensi: "Terkunci", saldo: 6400000 },
        { name: "Martha Indah", client: "martha.indah@gmail.com", lisensi: "Terkunci", saldo: 7700000 },
        { name: "Nadia Kurnia", client: "nadia.kurnia@gmail.com", lisensi: "Terkunci", saldo: 9300000 },
        { name: "Oki Setiawan", client: "oki.setiawan@gmail.com", lisensi: "Terkunci", saldo: 6000000 },
        { name: "Putu Ayu", client: "putu.ayu@gmail.com", lisensi: "Terkunci", saldo: 5300000 },
        { name: "Rizky Hartono", client: "rizky.hartono@gmail.com", lisensi: "Terkunci", saldo: 8000000 },
        { name: "Sari Melati", client: "sari.melati@gmail.com", lisensi: "Terkunci", saldo: 4500000 },
        { name: "Tari Nuraini", client: "tari.nuraini@gmail.com", lisensi: "Terkunci", saldo: 6000000 },
        { name: "Uli Rahmawati", client: "uli.rahmawati@gmail.com", lisensi: "Terkunci", saldo: 7200000 },
        { name: "Vivi Ananda", client: "vivi.ananda@gmail.com", lisensi: "Terkunci", saldo: 8900000 },
        { name: "Wira Prabowo", client: "wira.prabowo@gmail.com", lisensi: "Terkunci", saldo: 7500000 },
        { name: "Xena Sari", client: "xena.sari@gmail.com", lisensi: "Terkunci", saldo: 6200000 },
        { name: "Yusuf Hidayat", client: "yusuf.hidayat@gmail.com", lisensi: "Terkunci", saldo: 5400000 },
        { name: "Zahra Lestari", client: "zahra.lestari@gmail.com", lisensi: "Terkunci", saldo: 8300000 },
        { name: "Aditya Nugroho", client: "aditya.nugroho@gmail.com", lisensi: "Terkunci", saldo: 9100000 },
        { name: "Budi Santoso", client: "budi.santoso@gmail.com", lisensi: "Terkunci", saldo: 4800000 },
        { name: "Citra Dewi", client: "citra.dewi@gmail.com", lisensi: "Terkunci", saldo: 6400000 },
        { name: "Dewi Lestari", client: "dewi.lestari@gmail.com", lisensi: "Terkunci", saldo: 7300000 },
        { name: "Eko Prasetyo", client: "eko.prasetyo@gmail.com", lisensi: "Terkunci", saldo: 9100000 },
        { name: "Fajar Nugroho", client: "fajar.nugroho@gmail.com", lisensi: "Terkunci", saldo: 4800000 },
        { name: "Gita Rahmawati", client: "gita.rahmawati@gmail.com", lisensi: "Terkunci", saldo: 6000000 },
        { name: "Hendra Wijaya", client: "hendra.wijaya@gmail.com", lisensi: "Terkunci", saldo: 7500000 },
        { name: "Intan Permatasari", client: "intan.permatasari@gmail.com", lisensi: "Terkunci", saldo: 8200000 },
        { name: "Joko Susanto", client: "joko.susanto@gmail.com", lisensi: "Terkunci", saldo: 3900000 },
        { name: "Kiki Amalia", client: "kiki.amalia@gmail.com", lisensi: "Terkunci", saldo: 5600000 },
        { name: "Lina Sari", client: "lina.sari@gmail.com", lisensi: "Terkunci", saldo: 7100000 },
        { name: "Maya Indah", client: "maya.indah@gmail.com", lisensi: "Terkunci", saldo: 8400000 },
        { name: "Nina Kurniawati", client: "nina.kurniawati@gmail.com", lisensi: "Terkunci", saldo: 9200000 },
        { name: "Omar Hidayat", client: "omar.hidayat@gmail.com", lisensi: "Terkunci", saldo: 6700000 },
        { name: "Putri Ayu", client: "putri.ayu@gmail.com", lisensi: "Terkunci", saldo: 5300000 },
        { name: "Rudi Hartono", client: "rudi.hartono@gmail.com", lisensi: "Terkunci", saldo: 8000000 },
        { name: "Siti Nurhaliza", client: "siti.nurhaliza@gmail.com", lisensi: "Terkunci", saldo: 4500000 },
        { name: "Tina Melati", client: "tina.melati@gmail.com", lisensi: "Terkunci", saldo: 6000000 },
        { name: "Umar Faruq", client: "umar.faruq@gmail.com", lisensi: "Terkunci", saldo: 7200000 },
    ];

    // Ambil data dari localStorage
    let storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        projects = JSON.parse(storedProjects); // Menggunakan data yang disimpan
    }

    let projectList = document.getElementById("project-list");
    let editButton = document.getElementById("edit-button");
    let saveButton = document.getElementById("save-button");
    let isEditing = false; // Status untuk mengatur mode edit

    projects.forEach((project, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td contenteditable="false" onblur="updateProject(${index}, 'name', this.innerText)">${project.name}</td>
            <td contenteditable="false" onblur="updateProject(${index}, 'client', this.innerText)">${project.client}</td>
            <td contenteditable="false" onblur="updateProject(${index}, 'saldo', this.innerText)">${project.saldo.toLocaleString('id-ID')}</td>
            <td>
                <button class="bekukan-button" data-index="${index}">Terkunci</button>
            </td>
        `;
        projectList.appendChild(row);
    });

    document.getElementById("total-projects").textContent = projects.length;

    // Menghitung total saldo
    function calculateTotalAndAverage() {
        let totalSaldo = projects.reduce((total, project) => total + project.saldo, 0);
        document.getElementById("total-balance").textContent = `Rp. ${totalSaldo.toLocaleString('id-ID')}`;
    }

    // Fungsi untuk memperbarui proyek
    window.updateProject = function(index, field, value) {
        if (field === 'name') {
            projects[index].name = value;
        } else if (field === 'client') {
            projects[index].client = value;
        } else if (field === 'saldo') {
            let newSaldo = parseInt(value.replace(/\./g, '').replace(/Rp. /, ''));
            if (!isNaN(newSaldo)) {
                projects[index].saldo = newSaldo;
            }
        } else if (field === 'lisensi') {
            projects[index].lisensi = value;
        }
        
        // Simpan data ke localStorage
        localStorage.setItem('projects', JSON.stringify(projects));
        calculateTotalAndAverage();
    };

    // Fungsi untuk mengTerkuncikan mode edit
    editButton.addEventListener("click", function() {
        isEditing = true;
        document.querySelectorAll("td").forEach(td => {
            td.contentEditable = "true"; // MengTerkuncikan edit
        });
        this.style.display = "none"; // Sembunyikan tombol Edit
        saveButton.style.display = "inline"; // Tampilkan tombol Save
    });

    // Fungsi untuk menyimpan perubahan
    saveButton.addEventListener("click", function() {
        isEditing = false;
        document.querySelectorAll("td").forEach(td => {
            td.contentEditable = "false"; // MenonTerkuncikan edit
        });
        editButton.style.display = "inline"; // Tampilkan tombol Edit
        this.style.display = "none"; // Sembunyikan tombol Save
    });

    // Tambahkan event listener untuk tombol "Terkunci"
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("bekukan-button")) {
            const index = event.target.getAttribute("data-index");
            console.log(projects); // Periksa nilai sebelum penggantian
            // Ubah status menjadi "Terkunci"
            projects[index].lisensi = "Terkunci";
            console.log(projects); // Periksa nilai setelah penggantian
            localStorage.setItem('projects', JSON.stringify(projects));
            
            // Arahkan ke pay.html
            window.location.href = "pay.html";
        }
    });

    // Panggil fungsi untuk menghitung dan menampilkan saldo
    calculateTotalAndAverage();
});