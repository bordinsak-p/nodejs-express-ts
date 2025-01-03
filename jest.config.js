module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)", // สำหรับโฟลเดอร์ __tests__
        "**/?(*.)+(spec|test).[tj]s?(x)" // รองรับ *.test.ts หรือ *.spec.ts
      ],
};
  