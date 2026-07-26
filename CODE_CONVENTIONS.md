# Quy Chuẩn Code & Best Practices (Code Conventions & Best Practices)

Tài liệu này định nghĩa các quy chuẩn lập trình, cấu trúc thư mục, quy trình Git và Best Practices được áp dụng thống nhất cho dự án **Profilo**.

---

## 📋 1. Quy tắc Đặt tên (Naming Conventions)

| Đối tượng | Quy chuẩn | Ví dụ |
| :--- | :--- | :--- |
| **Thư mục / Files chung** | `kebab-case` | `user-profile/`, `auth-service.ts` |
| **React/Vue Components** | `PascalCase` | `HeaderBar.tsx`, `UserProfileCard.vue` |
| **Biến & Hàm (Variables/Functions)** | `camelCase` | `currentUser`, `getUserById()` |
| **Types / Interfaces / Classes** | `PascalCase` | `UserResponse`, `AuthRepository` |
| **Hằng số (Constants)** | `UPPER_SNAKE_CASE` | `MAX_RETRY_COUNT`, `DEFAULT_THEME` |

---

## 🏗️ 2. Nguyên tắc Viết Code (Clean Code Principles)

1. **DRY (Don't Repeat Yourself)**: Không lặp lại code. Tách các đoạn logic dùng chung thành helper function hoặc custom hook.
2. **KISS (Keep It Simple, Stupid)**: Giữ giải pháp đơn giản và tối ưu nhất, tránh over-engineering.
3. **Single Responsibility (SRP)**: Mỗi hàm/component chỉ đảm nhận **một trách nhiệm duy nhất**.
4. **Strict Type Safety**: 
   - Ưu tiên sử dụng TypeScript.
   - Bật `strict: true` trong configuration.
   - Hạn chế tối đa kiểu `any`.

---

## 🔒 3. Bảo mật & Hiệu năng (Security & Performance)

- **Bảo mật (Security)**:
  - **Không lưu trữ Secret/API Key** trực tiếp trong source code. Luôn dùng tệp `.env`.
  - Kiểm tra và sanitize mọi dữ liệu đầu vào từ người dùng (Tránh XSS, Injection).
- **Hiệu năng (Performance)**:
  - Tối ưu kích thước hình ảnh và assets.
  - Sử dụng Lazy Loading cho hình ảnh và components lớn.
  - Tránh tính toán lặp lại trong render loop (sử dụng Memoization thích hợp).

---

## ⚠️ 4. Xử lý Lỗi & Logging (Error Handling)

- Không bao giờ "bỏ qua" lỗi âm thầm (`catch (e) {}` trống).
- Phản hồi thông báo lỗi rõ ràng, thân thiện với người dùng ở layer UI.
- Log chi tiết context của lỗi ở layer service/backend để dễ dàng tra cứu.

---

## 🔀 5. Quy chuẩn Commit & Git Workflow

Sử dụng định dạng **Conventional Commits**:

- `feat:` Thêm tính năng mới (ví dụ: `feat: add user authentication form`)
- `fix:` Sửa lỗi (ví dụ: `fix: correct layout alignment on mobile`)
- `docs:` Thêm/sửa tài liệu (ví dụ: `docs: update setup guide in README`)
- `style:` Chỉnh sửa format code, CSS (không làm thay đổi logic)
- `refactor:` Tái cấu trúc code (không thêm feature hay fix bug)
- `test:` Thêm hoặc sửa unit/integration test
- `chore:` Cập nhật build system, dependencies, cấu hình

---

## 🤖 6. Cấu hình AI Agent (.agents)

Hệ thống AI Agent tự động ghi nhận các quy chuẩn từ thư mục `.agents/`:
- **Rules chung**: [.agents/AGENTS.md](file:///d:/Profilo/.agents/AGENTS.md)
- **Skill Code Conventions**: [.agents/skills/code-conventions/SKILL.md](file:///d:/Profilo/.agents/skills/code-conventions/SKILL.md)
