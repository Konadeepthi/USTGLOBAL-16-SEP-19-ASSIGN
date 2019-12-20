package com.ustglobal.stockmanagement.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.ustglobal.stockmanagement.dto.ProductInfo;
@Repository
public class ProductDaoImpl implements ProductDao{
	@PersistenceUnit
	private EntityManagerFactory factory;

	@Override
	public ProductInfo searchProductByName(String name) {
		EntityManager manager = factory.createEntityManager();
		try {
			String jpql = "from ProductInfo where name=:name";
			TypedQuery<ProductInfo> typedQuery = manager.createQuery(jpql, ProductInfo.class);
			typedQuery.setParameter("name", name);
			ProductInfo product = typedQuery.getSingleResult();
			return product;
		}catch (Exception e) {
			return null;
		}
	}

	@Override
	public List<ProductInfo> searchProductByCategory(String category) {
		EntityManager manager = factory.createEntityManager();
		String jpql = "from ProductInfo where category=:category";
		TypedQuery<ProductInfo> typedQuery = manager.createQuery(jpql, ProductInfo.class);
		typedQuery.setParameter("category", category);
		return typedQuery.getResultList();
	}

	@Override
	public List<ProductInfo> searchProductByCompany(String company) {
		EntityManager manager = factory.createEntityManager();
		String jpql = "from ProductInfo where company=:company";
		TypedQuery<ProductInfo> typedQuery = manager.createQuery(jpql, ProductInfo.class);
		typedQuery.setParameter("company", company);
		return typedQuery.getResultList();
	}

	@Override
	public boolean addProduct(ProductInfo bean) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(bean);
			transaction.commit();
			return true;
		}catch (Exception e) {
			return false;
		}
	}

	@Override
	public boolean modifyProducts(ProductInfo bean) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			ProductInfo p = manager.find(ProductInfo.class, bean.getId());
			p.setName(bean.getName());
			p.setCategory(bean.getCategory());
			p.setCompany(bean.getCompany());
			p.setPrice(bean.getPrice());
			p.setQuantity(bean.getQuantity());
			transaction.commit();
			return true;
		}catch (Exception e) {
			return false;
		}
	}

	@Override
	public List<ProductInfo> showAllProducts() {
		String jpql="from ProductInfo";
		EntityManager manager=factory.createEntityManager();
		TypedQuery<ProductInfo> query=manager.createQuery(jpql, ProductInfo.class);
		List<ProductInfo> productBeans=query.getResultList();
		return productBeans;
	}

	}