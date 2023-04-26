export const validateNameField = (name: string) => {
    if (name.trim() === "") {
        return "ニックネームを入力してください";
    }
    if (name.length >= 16) {
        return "15文字以下で設定してください";
    }
};
