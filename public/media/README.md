# /public/media/

โฟลเดอร์นี้สำหรับ **content assets** ที่เปลี่ยนได้โดยไม่ต้อง rebuild Docker:
- `coaches/` — รูปโค้ช
- `classes/` — รูปคอร์ส
- `clients/` — logo ลูกค้า
- `about/` — รูปหน้า About
- `testimonials/` — รูป testimonial

> อัปโหลดไฟล์ใหม่ได้เลย Nginx รับ request `/media/...` โดยตรง

## โฟลเดอร์เปรียบเทียบ

| Folder | Path | ใช้สำหรับ | Nginx/Nuxt |
|--------|------|-----------|------------|
| `public/images/` | `/images/...` | design assets: icon, bg, logo | Nuxt (bundled) |
| `public/media/` | `/media/...` | content: photos, graphics | Nginx (volume) |
| `public/downloads/` | `/downloads/...` | PDFs, documents | Nginx (volume) |
