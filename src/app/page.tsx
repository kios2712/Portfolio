// app/page.jsx
import { redirect } from 'next/navigation';

export default function HomeRedirect() {
  redirect('/home');
}