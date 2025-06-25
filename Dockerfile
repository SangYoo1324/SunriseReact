# --- Dockerfile ---
FROM node:20-alpine

# 앱 디렉토리 생성
WORKDIR /app

# dist만 사용하므로 빌드 결과물만 복사
COPY ./ ./dist

# 정적 파일 서빙용 serve 설치
RUN npm install -g serve

# 포트 노출
EXPOSE 3000

# 앱 실행
CMD ["serve", "-s", "dist", "-l", "3000"]