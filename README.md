# ToDo_List - Desktop ToDo Widget

A minimal, always-on desktop widget for managing your to-do lists and memos. Built with Electron and vanilla JavaScript, it stays on your desktop, saves your tasks locally, and loads them on startup.

## ✨ Key Features

  * **Persistent Data:** All tasks are automatically saved to `localStorage` and reloaded when the app starts.
  * **Two-List System:** Separate lists for "To-Do" and "Done"
  * **Drag & Drop:** Easily reorder tasks by dragging and dropping them within or between lists.
  * **Click to Copy:** Click on any task's text to instantly copy it to your clipboard.
  * **Auto-Update Ready:** Built with `electron-updater` to support automatic updates from a GitHub Release.

## 🛠️ Tech Stack

  * **Framework:** Electron
  * **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
  * **Packaging:** electron-builder
  * **Updating:** electron-updater

## 🚀 Getting Started (For Development)

To get a local copy up and running for development:

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd [Your Project Name]
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Run the app in development mode:
    ```sh
    npm start
    ```

## 📦 Building the App

To package the app into an executable installer (`.exe` for Windows):

```sh
# This will create an installer in the /dist folder
npm run build
```

## 📄 License

This project is licensed under the MIT License.

-----

-----

# ToDo_List - 데스크톱 ToDo 위젯

To-Do 리스트와 메모를 관리할 수 있는 미니멀한 데스크톱 위젯입니다. Electron과 순수 JavaScript로 제작되었으며, 바탕화면에 상주하며 작업을 로컬에 저장하고 앱 시작 시 자동으로 불러옵니다.

## ✨ 주요 기능

  * **데이터 자동 저장:** 모든 작업은 `localStorage`에 자동으로 저장되며, 앱을 다시 시작할 때 그대로 복원됩니다.
  * **두 개의 목록:** '할 일' 목록과 '완료' 목록이 분리되어 있습니다.
  * **드래그 앤 드롭:** 작업을 마우스로 끌어 목록 간 또는 목록 내에서 쉽게 순서를 변경할 수 있습니다.
  * **클릭하여 복사:** 작업 텍스트를 클릭하면 해당 내용이 즉시 클립보드에 복사됩니다.
  * **자동 업데이트 지원:** `electron-updater`를 사용하여 GitHub 릴리스로부터 자동 업데이트를 받도록 설정되어 있습니다.

## 🛠️ 사용 기술

  * **프레임워크:** Electron
  * **프론트엔드:** HTML5, CSS3, Vanilla JavaScript (ES6+)
  * **패키징:** electron-builder
  * **업데이트:** electron-updater

## 🚀 시작하기 (개발용)

로컬 환경에서 개발용으로 앱을 실행하는 방법입니다.

1.  저장소 복제:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  프로젝트 디렉터리로 이동:
    ```sh
    cd [Your Project Name]
    ```
3.  NPM 패키지 설치:
    ```sh
    npm install
    ```
4.  개발 모드로 앱 실행:
    ```sh
    npm start
    ```

## 📦 앱 빌드하기 (패키징)

앱을 설치 가능한 실행 파일(`.exe` 등)로 패키징합니다.

```sh
# /dist 폴더에 설치 파일이 생성됩니다.
npm run build
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.