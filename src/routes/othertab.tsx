import OtherTabPage from '@/views/OtherTab'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/othertab')({
  component: OtherTabPage,
})
