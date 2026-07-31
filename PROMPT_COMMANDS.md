# Hướng Dẫn & Quy Ước Prompt Engineering Slash Commands

## 📌 Tổng Quan (Overview)

Hệ thống **Prompt Engineering Slash Commands** là bộ công cụ chuẩn hóa gồm 10 lệnh điều phối và tối ưu hóa câu lệnh (prompts) dành cho các mô hình ngôn ngữ lớn (LLMs). Bộ công cụ này hỗ trợ Developer, AI Engineer và Prompt Engineer xây dựng, kiểm thử, rút gọn, tinh chỉnh và định tuyến prompt một cách chuyên nghiệp, nhất quán và đạt hiệu suất cao nhất.

### 📊 Bảng Tra Cứu Nhanh Slash Commands

| # | Slash Command | Tên Tiếng Anh | Chức Năng Chính |
| -: | --------------------- | --------------------- | ---------------------------------------------------------------------- |
| 1 | `/meta-prompt` | Meta Prompt Coordinator | Điều phối, tạo và tối ưu toàn bộ prompt workflow |
| 2 | `/prompt-designer` | Prompt Designer | Thiết kế prompt mới từ yêu cầu thô |
| 3 | `/prompt-refiner` | Prompt Refiner | Tinh chỉnh và cải thiện prompt hiện có |
| 4 | `/prompt-compressor` | Prompt Compressor | Rút gọn prompt, giảm token nhưng giữ nguyên ý nghĩa |
| 5 | `/constraint-builder` | Constraint Builder | Xây dựng hoặc bổ sung constraints (ràng buộc) |
| 6 | `/role-designer` | Role & Persona Designer| Thiết kế hoặc tối ưu Role/Persona |
| 7 | `/fewshot-builder` | Few-shot Builder | Sinh các ví dụ Few-shot minh họa |
| 8 | `/prompt-debugger` | Prompt Debugger | Phân tích và chẩn đoán lỗi trong prompt |
| 9 | `/prompt-structurer` | Prompt Structurer | Chuẩn hóa prompt thành cấu trúc khung chuẩn |
| 10 | `/model-router` | Model Router | Chọn hoặc định tuyến đến mô hình AI phù hợp |

---

## 🛠️ Chi Tiết Quy Ước 10 Slash Commands

---

### 1. `/meta-prompt` — Meta Prompt Coordinator

- **Mục đích (Purpose)**:
  - Phân tích yêu cầu cấp cao (High-level Intent) của người dùng.
  - Tự động liên kết và kích hoạt toàn bộ workflow thiết kế prompt từ ý tưởng ban đầu đến sản phẩm hoàn chỉnh.
  - Đảm bảo tính toàn diện bao gồm: Role, Context, Task, Constraints, Examples và Format.

- **Kỳ vọng Output (Expected Output)**:
  1. **Intent Analysis**: Báo cáo phân tích mục tiêu và ngữ cảnh sử dụng.
  2. **Complete Master Prompt**: Bản Prompt hoàn chỉnh được đóng gói sẵn sàng đưa vào sản xuất.
  3. **Usage & Testing Guide**: Hướng dẫn truyền biến đầu vào và các kịch bản kiểm thử (test cases) đề xuất.

---

### 2. `/prompt-designer` — Prompt Designer

- **Mục đích (Purpose)**:
  - Chuyển đổi các ý tưởng, ghi chú hoặc yêu cầu nghiệp vụ chưa rõ ràng thành System Prompt và User Prompt chuẩn hóa.
  - Xác định và trích xuất các biến tĩnh/động (Variables/Placeholders) cần thiết.

- **Kỳ vọng Output (Expected Output)**:
  1. **System Prompt**: Đoạn chỉ dẫn nền tảng định hình hành vi mô hình.
  2. **User Prompt Template**: Mẫu câu lệnh chứa các biến như `{{input_data}}`, `{{user_goal}}`.
  3. **Variable Schema**: Danh sách các biến và giải thích định dạng dữ liệu đầu vào.

---

### 3. `/prompt-refiner` — Prompt Refiner

- **Mục đích (Purpose)**:
  - Nâng cấp chất lượng của một prompt có sẵn bằng cách làm rõ chỉ dẫn, bổ sung chi tiết ngữ cảnh và loại bỏ sự mơ hồ.
  - Giúp mô hình AI hiểu chính xác hơn mục đích người dùng mà không bị hiểu sai ý.

- **Kỳ vọng Output (Expected Output)**:
  1. **Refined Prompt**: Bản prompt đã nâng cấp.
  2. **Diff / Change Log**: Bảng so sánh Trước (Before) và Sau (After) kèm lý do cải thiện chi tiết.
  3. **Edge Case Coverage**: Các trường hợp ngoại lệ đã được bổ sung chỉ dẫn xử lý.

---

### 4. `/prompt-compressor` — Prompt Compressor

- **Mục đích (Purpose)**:
  - Tối ưu hóa số lượng token (Token Cost Optimization) và tốc độ phản hồi (Latency).
  - Cô đọng câu từ, loại bỏ từ thừa nhưng **giữ nguyên 100% logic, ràng buộc và ý nghĩa cốt lõi**.

- **Kỳ vọng Output (Expected Output)**:
  1. **Compressed Prompt**: Bản prompt nén nhỏ gọn.
  2. **Token Efficiency Metrics**: Thống kê số lượng/tỷ lệ token tiết kiệm được (ví dụ: Giảm 38% tokens).
  3. **Semantic Integrity Check**: Cam kết bảo toàn ngữ nghĩa và quy tắc cũ.

---

### 5. `/constraint-builder` — Constraint Builder

- **Mục đích (Purpose)**:
  - Xây dựng hệ thống ràng buộc khắt khe nhằm ngăn ngừa ảo giác (Hallucination), vi phạm định dạng hoặc trả lời ngoài phạm vi (Out-of-bound).
  - Thiết lập quy tắc loại trừ (Negative Constraints) và giới hạn an toàn (Boundary Guards).

- **Kỳ vọng Output (Expected Output)**:
  1. **Must-Have Rules**: Danh sách quy tắc bắt buộc phải tuân thủ.
  2. **Negative Constraints (Forbidden)**: Danh sách những việc AI tuyệt đối **không được làm** (ví dụ: Không dùng từ suy đoán, không bịa đặt số liệu).
  3. **Safety & Fallback Clause**: Chỉ dẫn hành vi xử lý khi dữ liệu đầu vào thiếu hoặc không hợp lệ.

---

### 6. `/role-designer` — Role & Persona Designer

- **Mục đích (Purpose)**:
  - Định hình cá tính (Persona), cấp độ chuyên môn (Seniority Level), tư duy làm việc và giọng văn (Tone of Voice) cho AI Agent.
  - Giúp câu trả lời mang phong cách chuyên nghiệp phù hợp với từng lĩnh vực (Senior Fullstack Developer, Legal Expert, Medical Researcher...).

- **Kỳ vọng Output (Expected Output)**:
  1. **Role Profile**: Tên vai trò và tuyên bố sứ mệnh cốt lõi.
  2. **Expertise & Knowledge Scope**: Phạm vi kiến thức và phương pháp tư duy chuyên ngành.
  3. **Tone & Style Guidelines**: Quy tắc về giọng văn, thuật ngữ chuyên môn và thái độ phản hồi.

---

### 7. `/fewshot-builder` — Few-shot Example Builder

- **Mục đích (Purpose)**:
  - Sinh ra bộ ví dụ minh họa (Input/Output Pairs) chất lượng cao theo kỹ thuật Few-shot Learning.
  - Hướng dẫn mô hình AI hiểu trực quan mẫu đầu ra mong muốn mà không cần giải thích dông dài.

- **Kỳ vọng Output (Expected Output)**:
  1. **Standard Examples**: 2 - 3 ví dụ trường hợp đầu vào chuẩn (Happy Path).
  2. **Edge-case Examples**: 1 - 2 ví dụ trường hợp đầu vào phức tạp hoặc chứa lỗi (Edge Cases).
  3. **Structured Format**: Định dạng ví dụ rõ ràng dạng XML `<example>` hoặc JSON.

---

### 8. `/prompt-debugger` — Prompt Debugger

- **Mục đích (Purpose)**:
  - Chẩn đoán nguyên nhân khi mô hình AI trả lời sai, vi phạm định dạng, bị lặp từ hoặc sinh dữ liệu ảo.
  - Phân tích xung đột giữa các quy tắc trong prompt.

- **Kỳ vọng Output (Expected Output)**:
  1. **Root Cause Analysis (RCA)**: Chỉ ra chính xác dòng/cụm từ gây hiểu nhầm hoặc xung đột.
  2. **Conflict Matrix**: Danh sách các ràng buộc đang chọi nhau.
  3. **Fixed Prompt**: Bản Prompt đã sửa lỗi hoàn chỉnh kèm khuyến nghị kiểm thử.

---

### 9. `/prompt-structurer` — Prompt Structurer

- **Mục đích (Purpose)**:
  - Sắp xếp và đóng đóng gói toàn bộ prompt thô thành khung cấu trúc chuẩn mực (Professional Framework) dễ đọc và dễ bảo trì.
  - Sử dụng Markdown Headers hoặc thẻ XML Tags chuẩn (`<role>`, `<context>`, `<task>`, `<constraints>`, `<output_format>`).

- **Kỳ vọng Output (Expected Output)**:
  1. **Structured Layout**: Prompt được phân đoạn rõ ràng bằng thẻ XML hoặc Markdown Heading.
  2. **Section Breakdown**:
     - `ROLE`: Vai trò AI.
     - `CONTEXT`: Ngữ cảnh bài toán.
     - `TASK`: Nhiệm vụ chính.
     - `CONSTRAINTS`: Ràng buộc.
     - `EXAMPLES`: Ví dụ minh họa.
     - `OUTPUT_FORMAT`: Định dạng đầu ra.

---

### 10. `/model-router` — Model Router & Selector

- **Mục đích (Purpose)**:
  - Đánh giá bài toán và định tuyến đến mô hình AI tối ưu nhất (Gemini 1.5 Pro/Flash, Claude 3.5 Sonnet, GPT-4o, Llama 3).
  - Tối ưu hóa dựa trên 4 tiêu chí: Chi phí (Cost), Tốc độ (Latency), Cửa sổ ngữ cảnh (Context Window) và Khả năng suy luận (Reasoning Power).

- **Kỳ vọng Output (Expected Output)**:
  1. **Recommended Model**: Mô hình AI được đề xuất hàng đầu.
  2. **Evaluation Matrix**: Bảng so sánh 2 - 3 mô hình phù hợp theo chi phí, tốc độ và chất lượng.
  3. **Model-Specific Prompt Tuning**: Các khuyến nghị tinh chỉnh prompt đặc thù cho mô hình đã chọn (ví dụ: Claude thích thẻ XML, GPT thích Markdown).

---

## 📌 Hướng Dẫn Sử Dụng Trong Workflow Thực Tế

Khi phát triển một Prompt mới, bạn có thể kết hợp các lệnh theo chuỗi (Chain):

```text
/prompt-designer (Tạo nháp) ➔ /prompt-structurer (Chuẩn hóa khung) ➔ /constraint-builder (Thêm ràng buộc) ➔ /fewshot-builder (Thêm ví dụ) ➔ /prompt-compressor (Nén tối ưu token)
```
