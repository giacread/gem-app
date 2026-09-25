# IB Math Learning Platform

## 1. Product purpose

The platform helps IB Mathematics students understand topics, practise IB-style questions, complete teacher-assigned homework, and prepare for examinations.

The initial product should prioritise a reliable student learning experience, supported by a basic teacher dashboard.

## 2. Supported courses

- Mathematics: Analysis and Approaches (AA) SL
- Mathematics: Analysis and Approaches (AA) HL
- Mathematics: Applications and Interpretation (AI) SL
- Mathematics: Applications and Interpretation (AI) HL

Content hierarchy: **Course → Unit → Topic → Subtopic → Learning resources/questions**.

## 3. User roles

### Student

Students can browse review content, watch explanatory videos, practise questions by topic, subtopic, and difficulty, reveal hints, guided explanations, and markschemes, view recently visited content, complete and submit homework, access IA guidance and exam resources, and report incorrect or unclear content.

### Teacher

Teachers can create or join classes, invite students using class codes, assign questions or topics, write assignment instructions, set deadlines, review submissions, track completion, view basic student progress, and report problematic questions or resources.

### Administrator/content reviewer

Administrators can create and edit topics, articles, and resources; review and publish AI-generated questions; manage markschemes and guided solutions; review content reports; manage courses and curriculum content; and upload or link approved resources.

## 4. Student navigation

1. Home
2. Review
3. Question Bank
4. Homework
5. Past Papers
6. IA Guidance
7. Resources

The student profile includes course information, account settings, and school/class details.

## 5. Home dashboard

The home screen provides a welcome message, current course, continue-learning card, outstanding homework, upcoming deadlines, recently visited topics and questions, recommended review links, and recent teacher announcements. It remains useful when a student has no active homework.

## 6. Review area

Students can filter content by course, unit, topic, subtopic, and difficulty or level where relevant.

Each subtopic page contains:

- Simple explanation
- Key definitions and formulas
- Worked examples
- Diagrams or graphs where useful
- Embedded or linked video
- Common mistakes
- Short practice set
- Links to related question-bank questions
- Progress indicator or “mark as understood” action

Content should focus on conceptual understanding and use student-friendly language.

## 7. Question bank

Questions can be filtered by course, unit, topic, subtopic, difficulty, question type, calculator/non-calculator status, and estimated time.

Questions initially appear in exam-style format without immediately showing assistance. Assistance is staged:

1. Question
2. Optional related review page
3. Optional hint or guided approach
4. Guided solution article
5. Markscheme

Each question includes question text, diagrams or images where needed, answer format, mark allocation, markscheme, guided explanation, topic tags, difficulty rating, reviewer status, and a report button.

Questions are pre-generated and reviewed before publication. Students and teachers can report incorrect answers or markschemes, ambiguous wording, incorrect topic tags, formatting issues, and difficulty mismatches.

## 8. Homework

Teachers can create assignments containing a title, instructions, selected questions, selected topics or review links, due date and time, class or student recipients, optional attachment, and optional announcement/message.

Students see the assignment title, teacher message, questions, deadline, submission status, submission box or file upload, linked review material, and linked question-bank practice.

Statuses: Not started, In progress, Submitted, Returned, and Overdue.

For the first version, submissions can be text responses, images, or PDF uploads. Automated marking can be introduced later.

## 9. Teacher dashboard

The teacher dashboard includes class and student lists, assignment list, create-assignment action, submission status, basic completion rates, overdue work, student activity overview, and reported-question list.

The first version focuses on whether students have accessed, started, submitted, or completed work.

## 10. Recents

Record recently visited review pages, opened questions, watched videos, viewed markschemes, and accessed resources. Students can filter activity by today, this week, this month, or a custom date range; each item links to its original location.

## 11. Past papers

Organise past-paper access by examination session, course, level, paper number, time allowed, and markscheme where legally permitted. Add question-by-question topic links where available.

Copyright and licensing must be resolved before publishing IB-owned papers or official markschemes. Initial implementations may use school-provided materials, licensed content, or links to authorised sources.

## 12. IA guidance

Include guidance on the purpose of the exploration; choosing a suitable topic; formulating a research question; structure; mathematical communication; reflection; use of technology; common problems; planning checklist; and academic integrity.

The platform should guide students without writing the IA for them.

## 13. Resources

Include calculator guides, calculator function explanations, formula-booklet access where permitted, final examination checklist, revision-planning guide, notation reference, command terms, exam technique advice, and study guidance.

## 14. Authentication and school access

Support Google/Microsoft school SSO and class-code joining.

School structure: **School → Teacher → Class → Students**.

Students may belong to multiple classes, such as a regular class and an examination-preparation group.

## 15. Core data entities

- User
- School
- Class
- Course
- Unit
- Topic
- Subtopic
- Review article
- Video/resource
- Question
- Markscheme
- Guided solution
- Assignment
- Assignment question
- Submission
- Recent activity
- Content report
- Notification

## 16. Recommended MVP order

### Phase 1: Student learning foundation

- Authentication
- Course selection
- Home dashboard
- Review library
- Subtopic pages
- Question bank
- Markscheme and guided-solution reveal flow
- Recents
- Basic resources

### Phase 2: Teacher workflow

- Teacher accounts
- Classes and class codes
- Assignment creation
- Student homework view
- Text/file submissions
- Basic teacher progress view

### Phase 3: Content operations

- Admin content editor
- Question review and publishing
- Reporting workflow
- Question versioning
- Course-wide content management

### Phase 4: Expansion

- Past papers
- IA guidance
- Advanced analytics
- Adaptive recommendations
- Automated feedback
- Mobile optimisation or native apps

## 17. Central learning loop

**Student encounters difficulty → opens review content → attempts an IB-style question → reveals guided help → checks markscheme → teacher assigns targeted follow-up practice**
