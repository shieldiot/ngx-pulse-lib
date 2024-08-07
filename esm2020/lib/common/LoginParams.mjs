// Login parameters data model
export class LoginParams {
    constructor(email, password, accessToken) {
        if (email !== undefined) {
            this.email = email;
        }
        if (password !== undefined) {
            this.password = password;
        }
        if (accessToken !== undefined) {
            this.accessToken = accessToken;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYXJhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHVsc2UtbGliL3NyYy9saWIvY29tbW9uL0xvZ2luUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDhCQUE4QjtBQUM5QixNQUFNLE9BQU8sV0FBVztJQVduQixZQUFZLEtBQWMsRUFBRSxRQUFpQixFQUFFLFdBQW9CO1FBQ2hFLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQUU7UUFDaEQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FBRTtRQUN6RCxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUFFO0lBQ3RFLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi8vIExvZ2luIHBhcmFtZXRlcnMgZGF0YSBtb2RlbFxuZXhwb3J0IGNsYXNzIExvZ2luUGFyYW1zIHtcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgcGFzc3dvcmQgXG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjZXNzIHRva2VuIC0gaW4gY2FzZSBvZiByZS1sb2dpbiB3aXRoIGV4aXN0aW5nIHRva2VuIFxuICAgIHB1YmxpYyBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuIFxuICAgICBjb25zdHJ1Y3RvcihlbWFpbD86IHN0cmluZywgcGFzc3dvcmQ/OiBzdHJpbmcsIGFjY2Vzc1Rva2VuPzogc3RyaW5nKSB7IFxuICAgICAgICBpZiAoZW1haWwgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmVtYWlsID0gZW1haWw7IH1cbiAgICAgICAgaWYgKHBhc3N3b3JkICE9PSB1bmRlZmluZWQpIHsgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkOyB9XG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbiAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjsgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==