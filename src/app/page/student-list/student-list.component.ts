import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  image: string;
  name: string;
  gender: string;
  dateOfBirth: string;
  status: 'Active' | 'Inactive';
  grade: number;
}

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;
  selectedStudents: number[] = [];
  searchTerm = '';
  
  // Filter options
  gradeFilter: number | null = null;
  statusFilter: 'Active' | 'Inactive' | null = null;

  constructor() { }

  ngOnInit(): void {
    this.loadStudents();
    this.applyFilters();
  }

  loadStudents(): void {
    // Mock data based on the image
    this.students = [
      { id: 1, image: 'assets/avatars/boy1.png', name: 'Grey Susaan', gender: 'M', dateOfBirth: '4/5/1989', status: 'Active', grade: 3 },
      { id: 2, image: 'assets/avatars/boy2.png', name: 'Andre Mark', gender: 'M', dateOfBirth: '4/6/1989', status: 'Inactive', grade: 4 },
      { id: 3, image: 'assets/avatars/girl1.png', name: 'Grey Susaan', gender: 'F', dateOfBirth: '4/5/1989', status: 'Inactive', grade: 2 },
      { id: 4, image: 'assets/avatars/girl2.png', name: 'Grey Susaan', gender: 'F', dateOfBirth: '4/5/1989', status: 'Inactive', grade: 2 },
      { id: 5, image: 'assets/avatars/girl3.png', name: 'Andre Mark', gender: 'F', dateOfBirth: '4/5/1989', status: 'Inactive', grade: 6 },
      { id: 6, image: 'assets/avatars/boy3.png', name: 'Grey Susaan', gender: 'M', dateOfBirth: '4/5/1989', status: 'Active', grade: 3 },
      { id: 7, image: 'assets/avatars/boy4.png', name: 'Andre Mark', gender: 'M', dateOfBirth: '4/5/1989', status: 'Active', grade: 3 },
      { id: 8, image: 'assets/avatars/boy5.png', name: 'Grey Susaan', gender: 'M', dateOfBirth: '4/5/1989', status: 'Active', grade: 3 },
      { id: 9, image: 'assets/avatars/boy6.png', name: 'Andre Mark', gender: 'M', dateOfBirth: '4/5/1989', status: 'Active', grade: 7 },
      { id: 10, image: 'assets/avatars/boy7.png', name: 'Andre Mark', gender: 'M', dateOfBirth: '4/5/1989', status: 'Active', grade: 4 },
      { id: 11, image: 'assets/avatars/girl4.png', name: 'Grey Susaan', gender: 'F', dateOfBirth: '4/5/1989', status: 'Inactive', grade: 4 },
      { id: 12, image: 'assets/avatars/girl5.png', name: 'Grey Susaan', gender: 'F', dateOfBirth: '4/5/1989', status: 'Active', grade: 2 },
      { id: 13, image: 'assets/avatars/girl6.png', name: 'Grey Susaan', gender: 'F', dateOfBirth: '4/5/1989', status: 'Active', grade: 2 },
    ];
    
    this.totalPages = Math.ceil(this.students.length / this.itemsPerPage);
  }

  applyFilters(): void {
    this.filteredStudents = this.students.filter(student => {
      // Apply search filter
      const matchesSearch = !this.searchTerm || 
        student.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      // Apply grade filter
      const matchesGrade = !this.gradeFilter || student.grade === this.gradeFilter;
      
      // Apply status filter
      const matchesStatus = !this.statusFilter || student.status === this.statusFilter;
      
      return matchesSearch && matchesGrade && matchesStatus;
    });
    
    this.totalPages = Math.ceil(this.filteredStudents.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }
  }

  get paginatedStudents(): Student[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredStudents.slice(startIndex, startIndex + this.itemsPerPage);
  }

  search(event: any): void {
    this.searchTerm = event.target.value;
    this.currentPage = 1;
    this.applyFilters();
  }

  setGradeFilter(grade: number | null): void {
    this.gradeFilter = grade;
    this.currentPage = 1;
    this.applyFilters();
  }

  setStatusFilter(status: 'Active' | 'Inactive' | null): void {
    this.statusFilter = status;
    this.currentPage = 1;
    this.applyFilters();
  }

  toggleSelectAll(event: any): void {
    if (event.target.checked) {
      this.selectedStudents = this.paginatedStudents.map(student => student.id);
    } else {
      this.selectedStudents = [];
    }
  }

  toggleSelectStudent(event: any, studentId: number): void {
    if (event.target.checked) {
      this.selectedStudents.push(studentId);
    } else {
      this.selectedStudents = this.selectedStudents.filter(id => id !== studentId);
    }
  }

  isSelected(studentId: number): boolean {
    return this.selectedStudents.includes(studentId);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPageArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}