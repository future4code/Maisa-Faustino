``` 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const valorPorCarro = valorTotalVendas/qtdeCarrosVendidos
    const salarioFixo = 2000
    const calculaComissao = (valorTotalVendas * 0.05) + (qtdeCarrosVendidos * 100)
    const salarioFinal = salarioFixo + calculaComissao
    return salarioFinal
  
}
```