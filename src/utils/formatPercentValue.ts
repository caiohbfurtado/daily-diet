import { NumberFormat } from 'intl'

export function formatPercentValue(value: number) {
  return `${new NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)}%`
}
