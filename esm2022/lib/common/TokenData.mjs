// TokenData model represents a user in account which is encrypted with the JWT token
export class TokenData {
    constructor(accountId, subjectId, subjectType, role, status, expiresIn) {
        if (accountId !== undefined) {
            this.accountId = accountId;
        }
        if (subjectId !== undefined) {
            this.subjectId = subjectId;
        }
        if (subjectType !== undefined) {
            this.subjectType = subjectType;
        }
        if (role !== undefined) {
            this.role = role;
        }
        if (status !== undefined) {
            this.status = status;
        }
        if (expiresIn !== undefined) {
            this.expiresIn = expiresIn;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5EYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXB1bHNlLWxpYi9zcmMvbGliL2NvbW1vbi9Ub2tlbkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEscUZBQXFGO0FBQ3JGLE1BQU0sT0FBTyxTQUFTO0lBb0JqQixZQUFZLFNBQWtCLEVBQUUsU0FBa0IsRUFBRSxXQUEwQixFQUFFLElBQXFCLEVBQUUsTUFBdUIsRUFBRSxTQUFrQjtRQUMvSSxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQUMsQ0FBQztRQUM1RCxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQUMsQ0FBQztRQUM1RCxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQUMsQ0FBQztRQUM3QyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQUMsQ0FBQztRQUNuRCxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQUMsQ0FBQztJQUNoRSxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBNZW1iZXJSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IFVzZXJTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMnO1xuXG5cblxuLy8gVG9rZW5EYXRhIG1vZGVsIHJlcHJlc2VudHMgYSB1c2VyIGluIGFjY291bnQgd2hpY2ggaXMgZW5jcnlwdGVkIHdpdGggdGhlIEpXVCB0b2tlblxuZXhwb3J0IGNsYXNzIFRva2VuRGF0YSB7XG4gXG4gICAgLy8gQWNjb3VudCBJRCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXV0aGVudGljYXRlZCBzdWJqZWN0IElEIChjYW4gYmUgdXNlciwgb3Igc2VydmljZSBhY2NvdW50KSBcbiAgICBwdWJsaWMgc3ViamVjdElkOiBzdHJpbmc7XG4gXG4gICAgLy8gU3ViamVjdCB0eXBlOiBVTkRFRklORUQgfCBTWVNBRE1JTiB8IFVTRVIgfCBTRVJWSUNFX0FDQ09VTlQgXG4gICAgcHVibGljIHN1YmplY3RUeXBlOiBVc2VyVHlwZUNvZGU7XG4gXG4gICAgLy8gUm9sZSBvZiB1c2VyIGluIHRoZSBhY2NvdW50OiBVTkRFRklORUQgfCBBRE1JTiB8IFVTRVIgXG4gICAgcHVibGljIHJvbGU6IE1lbWJlclJvbGVDb2RlO1xuIFxuICAgIC8vIFVzZXIgc3RhdHVzOiBVTkRFRklORUQgfCBQRU5ESU5HIHwgQUNUSVZFIHwgQkxPQ0tFRCB8IFNVU1BFTkRFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBVc2VyU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBUb2tlbiBleHBpcmF0aW9uIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZXhwaXJlc0luOiBudW1iZXI7XG4gXG4gICAgIGNvbnN0cnVjdG9yKGFjY291bnRJZD86IHN0cmluZywgc3ViamVjdElkPzogc3RyaW5nLCBzdWJqZWN0VHlwZT86IFVzZXJUeXBlQ29kZSwgcm9sZT86IE1lbWJlclJvbGVDb2RlLCBzdGF0dXM/OiBVc2VyU3RhdHVzQ29kZSwgZXhwaXJlc0luPzogbnVtYmVyKSB7IFxuICAgICAgICBpZiAoYWNjb3VudElkICE9PSB1bmRlZmluZWQpIHsgdGhpcy5hY2NvdW50SWQgPSBhY2NvdW50SWQ7IH1cbiAgICAgICAgaWYgKHN1YmplY3RJZCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3ViamVjdElkID0gc3ViamVjdElkOyB9XG4gICAgICAgIGlmIChzdWJqZWN0VHlwZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3ViamVjdFR5cGUgPSBzdWJqZWN0VHlwZTsgfVxuICAgICAgICBpZiAocm9sZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucm9sZSA9IHJvbGU7IH1cbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuc3RhdHVzID0gc3RhdHVzOyB9XG4gICAgICAgIGlmIChleHBpcmVzSW4gIT09IHVuZGVmaW5lZCkgeyB0aGlzLmV4cGlyZXNJbiA9IGV4cGlyZXNJbjsgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==