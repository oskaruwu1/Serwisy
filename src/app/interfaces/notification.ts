import $ from 'jquery'

export interface Notification {
    id: number,
    message: string,
    priority: "normal" | "high",
    delete: () => {}
}
